import React, { useState } from "react";

const Filter = ({ setFilter }) => {
	const handleGenerationClick = (generation) => {
		alert("Generation " + generation + " selected");
		setFilter(generation);
	};

	return (
		<div className="grid grid-rows-8 gap-2 m-3 ">
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded"
				onClick={() => handleGenerationClick(1)}
			>
				Generation 1
			</button>
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded"
				onClick={() => handleGenerationClick(2)}
			>
				Generation 2
			</button>
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded"
				onClick={() => handleGenerationClick(3)}
			>
				Generation 3
			</button>
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded"
				onClick={() => handleGenerationClick(4)}
			>
				Generation 4
			</button>
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded"
				onClick={() => handleGenerationClick(5)}
			>
				Generation 5
			</button>
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded"
				onClick={() => handleGenerationClick(6)}
			>
				Generation 6
			</button>
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded"
				onClick={() => handleGenerationClick(7)}
			>
				Generation 7
			</button>
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded"
				onClick={() => handleGenerationClick(8)}
			>
				Generation 8
			</button>
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded"
				onClick={() => handleGenerationClick(null)}
			>
				Deselect All Filters
			</button>
		</div>
	);
};

export default Filter;
