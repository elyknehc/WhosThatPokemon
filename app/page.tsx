"use client";
import Image from "next/image";
import Filter from "./components/Filter";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
import InfoModal from "./components/InfoModal";
import { Info } from "lucide-react";
import { AiFillInfoCircle } from "react-icons/ai";

export default function Home() {
	const [filter, setFilter] = useState(null);
	const [showModal, setShowModal] = useState(false); // Add state for modal visibility

	const handleButtonClick = () => {
		setShowModal(true); // Show the modal when button is clicked
	};

	return (
		<main className="p-4 bg-blue-400 h-screen">
			<div className="flex justify-center text-center">
				<div>
					<h1 className="font-bold mb-2">Who's that Pokemon?</h1>
					<div className="mb-2 flex items-center justify-center">
						<Filter setFilter={setFilter} />
						<AiFillInfoCircle
							onClick={handleButtonClick}
							className="text-4xl cursor-pointer"
						/>
					</div>
					<PokemonCard filter={filter} />
				</div>
			</div>
			{showModal && <InfoModal setShowModal={setShowModal} />}
		</main>
	);
}
