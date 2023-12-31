import React from "react";

const InfoModal = ({ setShowModal }) => {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50">
			<div className="bg-white rounded-lg p-8">
				<h2 className="text-2xl font-bold mb-4">Information:</h2>
				<div> 1. Guess the Pokemon that is generated by typing its name. </div>
				<div>
					2. Select a specific generation if you are more knowledgeable.{" "}
				</div>
				<div>
					3. Log in to save Pokemon that you don't know to help you remember.
				</div>
				<div> 4. Click on any saved Pokemon to learn more about it. </div>
				<div> 5. Compare your stats with others on the leaderboard! </div>
				<p className="text-gray-700 mb-4"></p>
				<div className="flex justify-end">
					<button
						onClick={() => setShowModal(false)}
						className="bg-blue-500 text-white px-4 py-2 rounded-lg"
					>
						Close
					</button>
				</div>
			</div>
		</div>
	);
};

export default InfoModal;
