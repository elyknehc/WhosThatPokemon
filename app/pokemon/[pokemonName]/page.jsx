"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import loadingGif from "../../components/loading.gif";
import axios from "axios";
import PokemonInfo from "../../components/PokemonInfo.jsx";

const page = ({ params }) => {
	const getSpecificPokemon = async (pokemonName) => {
		const res = await axios.get(
			`https://pokeapi.co/api/v2/pokemon/${pokemonName}`
		);
		return res.data;
	};
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const pokemonName = params.pokemonName.toLowerCase();
	const capitalizedPokemonName =
		pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
	useEffect(() => {
		const fetchPokemon = async () => {
			const pokemon = await getSpecificPokemon(pokemonName);
			setLoading(false);
			setData(pokemon);
		};
		fetchPokemon();
	}, []);

	return (
		//Make a component probably
		loading ? (
			<div className="flex justify-center items-center">
				<Image src={loadingGif} alt="Loading" />
			</div>
		) : (
			<div>
				<PokemonInfo
					name={capitalizedPokemonName}
					types={data.type}
					abilities={data.abilities}
					stats={data.stats}
				/>
			</div>
		)
	);
};

export default page;
