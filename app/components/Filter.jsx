import React, { useState } from "react";

const Filter = ({ setFilter }) => {
	const [selectedGeneration, setSelectedGeneration] = useState(null);

	const handleGenerationClick = (generation) => {
		setSelectedGeneration(generation);
		setFilter(generation);
	};

	return <div className="filter-container"></div>;
};

export default Filter;
