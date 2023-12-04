import React from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";

const Navbar = () => {
	const { user, googleSignIn, logOut } = UserAuth();
	const [loading, setLoading] = useState(true);

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

	return (
		<div className="h-20 w-full border-b-2 flex items-center justify-between p-2 bg-gray-200">
			<ul className="flex">
				<li className="mr-6">
					<Link href="/">Home</Link>
				</li>
				<li className="mr-6">
					<Link href="/leaderboards">Leaderboards</Link>
				</li>
				<li className="mr-6">
					{user && (
						<li className="mr-6">
							<Link href="/profile">Saved Pokemon</Link>
						</li>
					)}
				</li>
			</ul>

			{loading ? null : !user ? (
				<ul className="flex">
					<li
						onClick={handleSignIn}
						className="p-2 cursor-pointer bg-blue-500 text-white rounded-md mr-2"
					>
						Login
					</li>
					<li
						onClick={handleSignIn}
						className="p-2 cursor-pointer bg-blue-500 text-white rounded-md"
					>
						Sign up
					</li>
				</ul>
			) : (
				<div>
					<p className="text-gray-600">Welcome, {user.displayName}</p>
					<p className="cursor-pointer text-blue-500" onClick={handleSignOut}>
						Sign out
					</p>
				</div>
			)}
		</div>
	);
};

export default Navbar;
