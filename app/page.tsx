"use client";
import Image from "next/image";
import Filter from "./components/Filter";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

export default function Home() {
	const [filter, setFilter] = useState(null);

	return (
		<main className="p-4 bg-blue-400 h-screen">
			<div className="flex justify-center text-center">
				<div>
					<h1 className="font-bold mb-4">Who's that Pokemon?</h1>
					<div className="mb-2">
						<Filter setFilter={setFilter} />
					</div>
					<PokemonCard filter={filter} />
				</div>
			</div>
		</main>
	);
}
