import React from "react";
import Image from "next/image";

const PokemonItem = ({ key, name, image, deletePokemon }) => {
	return (
		<div>
			<div>
				<div className="p-3 text-center">
					<button onClick={() => deletePokemon(key)}>Delete</button>
					<Image src={image} width={100} height={100} alt="Pokemon Image" />
					<p>{name}</p>
				</div>
			</div>
		</div>
	);
};

export default PokemonItem;
