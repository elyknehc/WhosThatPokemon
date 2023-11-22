import axios from "axios";

export default async function getPokemon(id) {
	const response = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
	// const response = await axios.get("https://pokeapi.co/api/v2/pokemon/${id}");
	const data = await response.data;
	console.log(data.forms[0].name); // bulbasaur
	return data;
}
