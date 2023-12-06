import axios from "axios";

export default async function getPokemon(filter) {
	if (!filter) {
		const randomNumber = Math.floor(Math.random() * 1000) + 1;
		filter = randomNumber;
	}

	if (filter === 1) {
		filter = Math.floor(Math.random() * 151) + 1;
	}
	if (filter === 2) {
		filter = Math.floor(Math.random() * (251 - 152 + 1)) + 152;
	}
	if (filter === 3) {
		filter = Math.floor(Math.random() * (386 - 251)) + 251;
	}
	if (filter === 4) {
		filter = Math.floor(Math.random() * (493 - 386)) + 386;
	}
	if (filter === 5) {
		filter = Math.floor(Math.random() * (649 - 493)) + 493;
	}
	if (filter === 6) {
		filter = Math.floor(Math.random() * (721 - 649)) + 649;
	}
	if (filter === 7) {
		filter = Math.floor(Math.random() * (809 - 721)) + 721;
	}
	if (filter === 8) {
		filter = Math.floor(Math.random() * (905 - 721)) + 721;
	}

	try {
		const response = await axios.get(
			`https://pokeapi.co/api/v2/pokemon/${filter}`
		);
		const name = response.data.species.name;
		const sprite =
			response.data.sprites.other["official-artwork"].front_default;
		const sprite2 = response.data.sprites.front_default;
		const res = [name, sprite, sprite2];
		return res;
	} catch (error) {
		console.log(error);
	}
}

export async function getSpecificPokemon(name) {
	try {
		const response = await axios.get(
			`https://pokeapi.co/api/v2/pokemon/${name}`
		);
		return response.data;
	} catch (error) {
		console.log(error);
	}
}
