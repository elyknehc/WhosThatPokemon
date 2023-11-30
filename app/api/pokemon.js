import axios from "axios";

export default async function getPokemon(filter) {
	const randomNumber = Math.floor(Math.random() * 1000) + 1;
	filter = randomNumber;
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
