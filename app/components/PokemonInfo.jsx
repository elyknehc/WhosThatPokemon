import React from "react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";

const PokemonInfo = ({ name, types, abilities, stats, moves, sprite }) => {
	return (
		<div className="bg-blue-400 flex flex-col items-center min-h-screen">
			<img src={sprite} width={400} height={400} alt="pkmn" draggable={false} />

			<h1 className="text-3xl"> {name}</h1>

			<div className="flex-col">
				{stats.map((stat, index) => (
					<div
						className="flex items-center justify-center"
						style={{ width: "500px" }}
						key={index}
					>
						<h3 className="p-3 w-2/4">
							{stat.stat.name}: {stat.base_stat}
							<Progress value={stat.base_stat} max={255} />
						</h3>
					</div>
				))}
			</div>
		</div>
	);
};

export default PokemonInfo;
