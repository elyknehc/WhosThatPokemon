import React, { useState, useEffect } from "react";
import Image from "next/image";

const Modal = ({ pokemonName, result, pokemonImg2 }) => {
	const [countdown, setCountdown] = useState(2);

	useEffect(() => {
		const timer = setInterval(() => {
			setCountdown((prevCountdown) => prevCountdown - 1);
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	useEffect(() => {
		if (countdown === 0) {
			setCountdown(2);
		}
	}, [countdown]);

	return (
		<div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
			<div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center w-96 h-96">
				{result ? (
					<div className="text-center">
						<h1 className="text-4xl font-bold">Correct!</h1>
						<h1 className="text-2xl">
							The answer was {" " + pokemonName.toUpperCase()}
						</h1>
					</div>
				) : (
					<div className="text-center">
						<h1 className="text-4xl font-bold">
							You did not guess the correct Pokémon.
						</h1>
						<h1 className="text-2xl">
							The answer was {" " + pokemonName.toUpperCase()}
						</h1>
					</div>
				)}
				<Image src={pokemonImg2} width={150} height={150} alt="pkmn" />
				New Pokemon in {countdown} seconds...
			</div>
		</div>
	);
};

export default Modal;
