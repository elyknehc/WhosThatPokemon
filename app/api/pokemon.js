import axios from "axios";

export default async function getPokemon(id) {
	try {
		// const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
		const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/1`);
		const data = await response.data.forms[0].name;
		// console.log(data.forms[0].name); // bulbasaur
		console.log(data);
		return data;
	} catch (error) {
		console.log(error);
	}
}
