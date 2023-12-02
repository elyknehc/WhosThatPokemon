import React from "react";
import Image from "next/image";

const PokemonItem = ({ id, name, image, deletePokemon }) => {
	const handleDelete = () => {
		deletePokemon(id);
	};

	return (
		<div>
			<div>
				<div className="p-3 text-center">
					<button onClick={handleDelete}>Delete</button>
					<Image src={image} width={100} height={100} alt="Pokemon Image" />
					<p>{name}</p>
					{id}
				</div>
			</div>
		</div>
	);
};

export default PokemonItem;
