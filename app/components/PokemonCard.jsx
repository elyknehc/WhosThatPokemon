"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import getPokemon from "../api/pokemon";

const PokemonCard = () => {
	const [pokemonImg, setPokemonImg] = useState("Hi"); // Default Image will be a pokeball
	const [pokemonName, setPokemonName] = useState(null);

	const handleGetPokemon = async () => {
		try {
			const pokemon = await getPokemon(1);
			setPokemonImg(pokemon[1]);
			setPokemonName(pokemon[0]);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			{/* <Image src={pokemonImg} width="100" height="100" /> */}
			PokemonCard
			<div>
				<button onClick={handleGetPokemon}>Get Pokemon</button>
				<p> {pokemonImg} </p>
				<p> {pokemonName} </p>
			</div>
		</div>
	);
};

export default PokemonCard;
