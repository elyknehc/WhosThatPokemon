"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const pokemon = ({ params }) => {
	const pokemonName = params.pokemonName.toLowerCase();

	return (
		<div>
			<h1>{pokemonName}</h1>
		</div>
	);
};

export default pokemon;
