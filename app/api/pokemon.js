import axios from "axios";

export default async function getPokemon(filter) {
	const randomNumber = Math.floor(Math.random() * 1000) + 1;
	filter = randomNumber;
	try {
		const response = await axios.get(
			`https://pokeapi.co/api/v2/pokemon/${filter}`
		);
		const name = await response.data.species.name;
		const sprite = await response.data.sprites.front_default;
		// console.log(data.forms[0].name); // bulbasaur
		const res = [name, sprite];
		console.log(res);
		return res;
	} catch (error) {
		console.log(error);
	}
}
