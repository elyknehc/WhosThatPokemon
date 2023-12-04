`use client`;
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PokemonItem = ({ id, name, nameText, image, deletePokemon }) => {
	const router = useRouter();
	const handleDelete = () => {
		deletePokemon(id);
	};

	const handleClick = () => {
		router.push(`/pokemon/${nameText}`);
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
					<button className="cursor-pointer" onClick={handleClick}>
						<Image
							src={image}
							width={100}
							height={100}
							alt="Pokemon Image"
							className="mt-4"
							draggable={false}
						/>
					</button>

					<p className="mt-2">{name}</p>
				</div>
			</div>
		</div>
	);
};

export default PokemonItem;
