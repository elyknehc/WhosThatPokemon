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
	updateDoc,
	increment,
} from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";

const PokemonCard = ({ filter }) => {
	const [pokemonImg, setPokemonImg] = useState(
		"https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_794xN.3584257734_bfy9.jpg"
	); // Default Image will be a pokeball
	const [pokemonImg2, setPokemonImg2] = useState(null);
	const [pokemonName, setPokemonName] = useState(null);
	const [loading, setLoading] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [correct, setCorrect] = useState(null);
	const [score, setScore] = useState(0);
	const [start, setStart] = useState(true);
	const [pokemonGuessed, setPokemonGuessed] = useState(0);

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

	const updateUserScores = async () => {
		if (!user) {
			return;
		}
		const querySnapshot = await getDocs(
			query(collection(db, "userScores"), where("user", "==", user.uid))
		);
		if (querySnapshot.empty) {
			const newDocRef = await addDoc(collection(db, "userScores"), {
				score: 1,
				user: user.uid,
				userName: user.displayName,
			});
		} else {
			// Increment the score by 1
			const docRef = doc(db, "userScores", querySnapshot.docs[0].id);
			await updateDoc(docRef, {
				score: increment(1),
			});
		}
	};

	const handleGetPokemon = async () => {
		setLoading(true);
		try {
			const pokemon = await getPokemon(filter);
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
		updateUserScores();
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

	useEffect(() => {
		// Get the total number of pokemon guessed by the user
		const getPokemonGuessed = async () => {
			if (!user) {
				return;
			}
			const querySnapshot = await getDocs(
				query(collection(db, "userScores"), where("user", "==", user.uid))
			);
			if (querySnapshot.empty) {
				return;
			}
			setPokemonGuessed(querySnapshot.docs[0].data().score);
		};
		getPokemonGuessed();
	}, [pokemonImg]);

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
							height={450}
							width={450}
							src={loadingGif}
							alt="Loading"
							draggable={false}
							loading="eager"
						/>
					</div>
				) : (
					<div>
						<div className="card bg-white rounded-lg shadow-lg p-4 flex flex-col items-center ">
							<img
								height={450}
								width={450}
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
									className="text-center border border-gray-300 rounded"
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
							<div>
								{user ? (
									<div className="text-center text-xl font-bold mt-4">
										Total Pokemon Guessed : {pokemonGuessed}
									</div>
								) : null}
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
