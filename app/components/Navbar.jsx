import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
	const { user, googleSignIn, logOut } = UserAuth();
	const [loading, setLoading] = useState(true);
	const [isMobile, setIsMobile] = useState(false);

	const handleSignIn = async () => {
		try {
			await googleSignIn();
		} catch (error) {
			console.log(error);
		}
	};

	const handleSignOut = async () => {
		try {
			await logOut();
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const checkAuthentication = async () => {
			await new Promise((resolve) => setTimeout(resolve, 50));
			setLoading(false);
		};
		checkAuthentication();
	}, [user]);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		handleResize();
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="h-20 w-full border-b-2 flex items-center justify-between p-2 bg-gray-200">
			<ul className={`flex ${isMobile ? "flex-col" : ""}`}>
				<li className={`mr-6`}>
					<Link href="/">Home</Link>
				</li>
				<li className={`mr-6`}>
					<Link href="/leaderboards">Leaderboard</Link>
				</li>
				{user && (
					<li className={`mr-6`}>
						<Link href="/profile">Saved Pokemon</Link>
					</li>
				)}
			</ul>

			{loading ? null : !user ? (
				<ul className={`flex ${isMobile ? "flex-col" : ""}`}>
					<li
						onClick={handleSignIn}
						className={`p-2 cursor-pointer bg-blue-500 text-white rounded-md mr-2 ${
							isMobile ? "mb-2" : ""
						}`}
					>
						Login
					</li>
				</ul>
			) : (
				<div>
					<p
						onClick={handleSignOut}
						className={`p-2 cursor-pointer bg-blue-500 text-white rounded-md mr-2 ${
							isMobile ? "mb-2" : ""
						}`}
					>
						Sign out
					</p>
				</div>
			)}
		</div>
	);
};

export default Navbar;
