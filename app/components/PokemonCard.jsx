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
						<div className="card bg-white rounded-lg shadow-lg p-4 flex flex-col items-center ">
							<img className="w-72 h-72" src={pokemonImg} alt="Pokemon" />
							<div>
								<input
									type="text"
									placeholder="Guess the Pokemon!"
									className="text-center"
									onChange={(e) =>
										e.target.value.toLowerCase() === pokemonName
											? handleGetPokemon()
											: null
									}
								/>
								{pokemonName}
							</div>
						</div>
					</div>
				)}

				<div>
					<button onClick={handleGetPokemon}> Reveal Answer </button>
				</div>
			</div>
		</div>
	);
};

export default PokemonCard;
