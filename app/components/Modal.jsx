import React from "react";

const Modal = ({ result, isVisible }) => {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
			<div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center "></div>
		</div>
	);
};

export default Modal;
