import React from "react";

const PokemonInfo = ({ name, types, abilities, stats, moves, sprite }) => {
	return (
		<div>
			<h1>{name}</h1>
			Stats:
			{stats.map((stat, index) => (
				<h1 key={index}>
					{stat.stat.name}: {stat.base_stat}
				</h1>
			))}
		</div>
	);
};

export default PokemonInfo;
