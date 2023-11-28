import React, { useState, useEffect } from "react";

const Modal = ({ pokemonName, result }) => {
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
			<div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
				{result ? (
					<div>
						<h1>Correct!</h1>
						<h1>The answer was {" " + pokemonName.toUpperCase()}</h1>
					</div>
				) : (
					<div>
						<h1>You did not guess the correct Pokémon.</h1>
						<h1>The answer was {" " + pokemonName.toUpperCase()}</h1>
					</div>
				)}
				New Pokemon in {countdown} seconds...
			</div>
		</div>
	);
};

export default Modal;
