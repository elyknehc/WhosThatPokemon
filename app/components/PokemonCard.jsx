"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Pokeball from "./Pokeball.jpg";
import getPokemon from "../api/pokemon";

const PokemonCard = () => {
	const [pokemonImg, setPokemonImg] = useState(Pokeball); // Default Image will be a pokeball
	const [pokemonName, setPokemonName] = useState(null);
	const [loading, setLoading] = useState(false);

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
	return (
		<div>
			<div>
				{loading ? (
					<div>
						<h1> Loading... </h1>
					</div>
				) : (
					<div>
						<img src={pokemonImg}></img> <p> {pokemonName} </p>{" "}
					</div>
				)}
				<div>
					<button onClick={handleGetPokemon}>Get Pokemon</button>
				</div>
				<div>
					<button> Reveal Answer </button>
				</div>
			</div>
		</div>
	);
};

export default PokemonCard;
