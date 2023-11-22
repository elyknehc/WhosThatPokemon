"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import getPokemon from "../api/pokemon";

const PokemonCard = () => {
	return (
		<div>
			{/* <Image src={pokemon} width="100" height="100" /> */}
			PokemonCard
			<div>
				<button onClick={() => getPokemon(1)}>Get Pokemon</button>
			</div>
		</div>
	);
};

export default PokemonCard;
