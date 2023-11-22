"use client";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";

const page = () => {
	const { user } = UserAuth();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const checkAuthentication = async () => {
			await new Promise((resolve) => setTimeout(resolve, 50));
			setLoading(false);
		};
		checkAuthentication();
	}, [user]);

	return (
		<div>
			{loading ? (
				<p> Loading...</p>
			) : user ? (
				<h1 className="p-4"> Welcome, {user.displayName} </h1>
			) : (
				<h1 className="p-4"> You must be logged in to view this page </h1>
			)}
		</div>
	);
};

export default page;
