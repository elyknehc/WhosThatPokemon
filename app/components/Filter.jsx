import React, { useState } from "react";

const Filter = ({ setFilter }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleGenerationClick = (generation) => {
		alert("Generation " + generation + " Selected");
		setFilter(generation);
	};

	return (
		<div className="relative inline-block text-left" style={{ zIndex: 999 }}>
			<div>
				<button
					type="button"
					className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					id="filter-menu"
					aria-expanded="true"
					aria-haspopup="true"
					onClick={() => setIsOpen(!isOpen)}
				>
					Generation
					<svg
						className="-mr-1 ml-2 h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fillRule="evenodd"
							d="M10 3.586L4.707 8.879a1 1 0 101.414 1.414L10 6.414l3.879 3.879a1 1 0 001.414-1.414L10 3.586z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>

			{isOpen && (
				<div
					className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="filter-menu"
				>
					<div className="py-1" role="none">
						<button
							className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
							role="menuitem"
							onClick={() => handleGenerationClick(1)}
						>
							Generation 1 (Kanto)
						</button>
						<button
							className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
							role="menuitem"
							onClick={() => handleGenerationClick(2)}
						>
							Generation 2 (Johto)
						</button>
						<button
							className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
							role="menuitem"
							onClick={() => handleGenerationClick(3)}
						>
							Generation 3 (Hoenn)
						</button>
						<button
							className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
							role="menuitem"
							onClick={() => handleGenerationClick(4)}
						>
							Generation 4 (Sinnoh)
						</button>
						<button
							className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
							role="menuitem"
							onClick={() => handleGenerationClick(5)}
						>
							Generation 5 (Unova)
						</button>
						<button
							className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
							role="menuitem"
							onClick={() => handleGenerationClick(6)}
						>
							Generation 6 (Kalos)
						</button>
						<button
							className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
							role="menuitem"
							onClick={() => handleGenerationClick(7)}
						>
							Generation 7 (Alola)
						</button>
						<button
							className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
							role="menuitem"
							onClick={() => handleGenerationClick(8)}
						>
							Generation 8 (Galar)
						</button>
						{/* <button
							className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
							role="menuitem"
							onClick={() => handleGenerationClick(9)}
						>
							Generation 9 (Paldea)
						</button> */}
						<button
							className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
							role="menuitem"
							onClick={() => handleGenerationClick(null)}
						>
							Deselect All Filters
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Filter;
