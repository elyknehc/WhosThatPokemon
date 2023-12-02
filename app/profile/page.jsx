"use client";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import {
	collection,
	getDoc,
	querySnapshot,
	query,
	where,
	onSnapshot,
	doc,
	deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import Image from "next/image";
import PokemonItem from "../components/PokemonItem";

const page = () => {
	const { user } = UserAuth();
	const [loading, setLoading] = useState(true);
	const [savedPokemon, setSavedPokemon] = useState([]);

	const deletePokemon = async (id) => {
		try {
			await deleteDoc(doc(db, "savedPokemon", id));
		} catch (error) {
			console.error("Error deleting Pokemon:", error);
		}
	};

	useEffect(() => {
		const checkAuthentication = async () => {
			await new Promise((resolve) => setTimeout(resolve, 50));
			setLoading(false);
		};

		checkAuthentication();
	}, [user, savedPokemon]);

	useEffect(() => {
		const fetchSavedPokemon = async () => {
			try {
				if (user) {
					const q = query(
						collection(db, "savedPokemon"),
						where("user", "==", user.uid)
					);
					const unsubscribe = onSnapshot(q, (querySnapshot) => {
						const pokemon = [];
						querySnapshot.forEach((doc) => {
							const pokemonData = doc.data();
							const pokemonWithId = { ...pokemonData, id: doc.id };
							pokemon.push(pokemonWithId);
						});
						setSavedPokemon(pokemon);
					});
					return unsubscribe;
				}
			} catch (error) {
				console.error("Error fetching saved Pokemon:", error);
			}
		};

		fetchSavedPokemon();
	}, [user, savedPokemon]);

	return (
		<div>
			{loading ? (
				<p> Loading...</p>
			) : user ? (
				<h1 className="p-4">
					Welcome, {user.displayName}
					<div className="flex align-items">
						{savedPokemon.map((pokemon) => (
							<PokemonItem
								key={pokemon.id}
								id={pokemon.id}
								name={pokemon.name}
								image={pokemon.image}
								deletePokemon={deletePokemon}
							/>
						))}
					</div>
				</h1>
			) : (
				<h1 className="p-4"> You must be logged in to view this page </h1>
			)}
		</div>
	);
};

export default page;
