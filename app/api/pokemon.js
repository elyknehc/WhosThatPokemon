import axios from "axios";

export default async function getPokemon(id) {
	const response = await axios.get("https://pokeapi.co/api/v2/pokemon/${id}");
	const data = await response.data;
	return data;
}
