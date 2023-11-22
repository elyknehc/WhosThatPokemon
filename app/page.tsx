"use client";
import Image from "next/image";
import Filter from "./components/Filter";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

export default function Home() {
	const [pokemon, setPokemon] = useState(null);
	const [pokemonName, setPokemonName] = useState(null);

	return (
		<main className="p-4">
			<div className="flex justify-center text-center">
				<div>
					<h1> Who's that Pokemon? </h1>
					{/* <Filter /> */}
					<PokemonCard />
				</div>
			</div>
		</main>
	);
}
