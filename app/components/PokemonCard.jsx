"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Pokeball from "./Pokeball.jpg";
import getPokemon from "../api/pokemon";
import Modal from "./Modal";

const PokemonCard = () => {
	const [pokemonImg, setPokemonImg] = useState(Pokeball); // Default Image will be a pokeball
	const [pokemonName, setPokemonName] = useState(null);
	const [loading, setLoading] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [correct, setCorrect] = useState(null);
	const [score, setScore] = useState(0);
	const [start, setStart] = useState(true);

	const handleGetPokemon = async () => {
		setLoading(true);
		try {
			const pokemon = await getPokemon();
			setPokemonImg(pokemon[1]);
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
		await handleModal();
		setTimeout(() => {
			handleGetPokemon();
		}, 2000);
	};

	const handleWrongGuess = async () => {
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

	// useEffect(() => {}, [isVisible]);

	return (
		<div>
			<div>
				{isVisible ? (
					<Modal pokemonName={pokemonName} result={correct} />
				) : null}
				{loading ? (
					<div>
						<h1> Loading... </h1>
					</div>
				) : (
					<div>
						<div className="card bg-white rounded-lg shadow-lg p-4 flex flex-col items-center ">
							<img className="w-72 h-72" src={pokemonImg} alt="Pokemon" />
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
								{pokemonName}
							</div>
						</div>
					</div>
				)}

				<div>
					{start ? (
						<button onClick={handleStart}> Start Game </button>
					) : (
						<button onClick={handleWrongGuess}> Reveal Answer </button>
					)}
				</div>
			</div>
		</div>
	);
};

export default PokemonCard;
