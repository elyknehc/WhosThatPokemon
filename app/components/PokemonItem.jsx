import React from "react";
import Image from "next/image";
import Link from "next/link";

const PokemonItem = ({ id, name, image, deletePokemon }) => {
	const handleDelete = () => {
		deletePokemon(id);
	};

	return (
		<div className="bg-gray-200 p-5 rounded-lg">
			<div className="flex items-center justify-center">
				<div className="p-5 text-center">
					<button
						className="bg-red-500 text-white px-4 py-2 rounded"
						onClick={handleDelete}
					>
						Delete
					</button>

					<Image
						src={image}
						width={100}
						height={100}
						alt="Pokemon Image"
						className="mt-4"
						draggable={false}
					/>

					<p className="mt-2">{name}</p>
				</div>
			</div>
		</div>
	);
};

export default PokemonItem;
