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
		<div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50">
			<div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center w-96 h-96">
				{result ? (
					<div className="text-center">
						<h1 className="text-4xl font-bold text-green-500">Correct!</h1>
						<h1 className="text-2xl">
							The answer was:
							<div>
								<h1 className="font-bold">
									{"\n" + pokemonName.toUpperCase()}{" "}
								</h1>
							</div>
						</h1>
					</div>
				) : (
					<div className="text-center">
						<h1 className="text-4xl font-bold text-red-500">
							You didn't guess correctly!
						</h1>
						<h1 className="text-2xl">
							The answer was:
							<div>
								<h1 className="font-bold">
									{"\n" + pokemonName.toUpperCase()}
								</h1>
							</div>
						</h1>
					</div>
				)}
				<img
					src={pokemonImg2}
					width={150}
					height={150}
					alt="pkmn"
					draggable={false}
				/>
				New Pokemon in {countdown} seconds...
			</div>
		</div>
	);
};

export default Modal;
