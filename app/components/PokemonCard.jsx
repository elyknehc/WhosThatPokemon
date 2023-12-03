"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Pokeball from "./Pokeball.jpg";
import loadingGif from "./loading.gif";
import getPokemon from "../api/pokemon";
import Modal from "./Modal";
import {
	collection,
	addDoc,
	getDocs,
	query,
	where,
	doc,
} from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";

const PokemonCard = ({ filter }) => {
	const [pokemonImg, setPokemonImg] = useState(Pokeball); // Default Image will be a pokeball
	const [pokemonImg2, setPokemonImg2] = useState(null);
	const [pokemonName, setPokemonName] = useState(null);
	const [loading, setLoading] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [correct, setCorrect] = useState(null);
	const [score, setScore] = useState(0);
	const [start, setStart] = useState(true);

	//Auth
	const { user } = UserAuth();

	//Add item to DB
	const addItem = async (e) => {
		if (!user) {
			alert("Please sign in to save Pokemon!");
			return;
		}
		e.preventDefault();
		try {
			// Check if the pokemon name already exists for the user
			const querySnapshot = await getDocs(
				query(
					collection(db, "savedPokemon"),
					where("name", "==", pokemonName),
					where("user", "==", user.uid)
				)
			);
			if (!querySnapshot.empty) {
				alert("You already have this Pokemon saved!");
				return;
			}

			// Add the current pokemon name and image to the database associated with the user's ID
			const newDocRef = await addDoc(collection(db, "savedPokemon"), {
				name: pokemonName,
				image: pokemonImg,
				user: user.uid,
			});
		} catch (error) {
			console.log(error);
		}
	};

	const handleGetPokemon = async () => {
		setLoading(true);
		try {
			const pokemon = await getPokemon();
			setPokemonImg(pokemon[1]);
			setPokemonImg2(pokemon[2]);
			setPokemonName(pokemon[0]);
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
	};

	const handleModal = () => {
		setIsVisible(true);
		setTimeout(() => {
			setIsVisible(false);
		}, 2000);
	};

	const handleCorrectGuess = async () => {
		setCorrect(true);
		setScore(score + 1);
		await handleModal();
		setTimeout(() => {
			handleGetPokemon();
		}, 2000);
	};

	const handleWrongGuess = async () => {
		setScore(0);
		setCorrect(false);
		await handleModal();
		setTimeout(() => {
			handleGetPokemon();
		}, 2000);
	};

	const handleStart = () => {
		setStart(false);
		handleGetPokemon();
	};

	return (
		<div>
			<div>
				{isVisible ? (
					<Modal
						pokemonName={pokemonName}
						result={correct}
						pokemonImg2={pokemonImg2}
					/>
				) : null}
				{loading ? (
					<div className="card bg-white rounded-lg shadow-lg p-4 flex flex-col items-center ">
						<Image
							height={500}
							width={500}
							src={loadingGif}
							alt="Loading"
							draggable={false}
						/>
					</div>
				) : (
					<div>
						<div className="card bg-white rounded-lg shadow-lg p-4 flex flex-col items-center ">
							<Image
								height={500}
								width={500}
								src={pokemonImg}
								alt="Pokemon"
								draggable={false}
								style={{
									filter: start ? "brightness(100%)" : "brightness(0%)",
								}}
							/>
							<div>
								<input
									type="text"
									placeholder="Guess the Pokemon!"
									className="text-center"
									onChange={(e) =>
										e.target.value.toLowerCase() === pokemonName
											? handleCorrectGuess()
											: null
									}
								/>
							</div>
						</div>
					</div>
				)}

				<div>
					{start ? (
						<div className="p-3">
							<button
								onClick={handleStart}
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
							>
								Start Game
							</button>
						</div>
					) : (
						<div>
							<div className="p-3 flex justify-center ">
								<div>
									<button
										onClick={handleWrongGuess}
										className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
									>
										Reveal Answer
									</button>
								</div>
								<div>
									<button
										onClick={addItem}
										className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
									>
										Save Pokemon
									</button>
								</div>
							</div>
							<div className="text-center text-xl font-bold mt-4">
								Streak: {score}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default PokemonCard;
