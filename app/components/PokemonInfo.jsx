import React from "react";
import Image from "next/image";

const PokemonInfo = ({ name, types, abilities, stats, moves, sprite }) => {
	return (
		<div className="bg-blue-400 flex flex-col items-center h-screen">
			<Image draggable={false} src={sprite} width={500} height={500} />
			<h1 className="text-3xl"> {name}</h1>

			<div>
				<h1> Stats: </h1>
				{stats.map((stat, index) => (
					<div key={index}>
						<h1>
							{stat.stat.name}: {stat.base_stat}
						</h1>
					</div>
				))}
			</div>
		</div>
	);
};

export default PokemonInfo;
