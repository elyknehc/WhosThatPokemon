import React from "react";
import Link from "next/link";

const Navbar = () => {
	return (
		<div className="h-20 w-full border-b-2 flex items-center justify-between p-2">
			<ul className="flex">
				<li className="mr-6">
					<Link href="/">Home</Link>
				</li>
			</ul>
			<ul className="ml-auto flex">
				<li className="p-2 cursor-pointer"> Login </li>
			</ul>
			<ul className="flex">
				<li className="p-2 cursor-pointer"> Sign Out </li>
			</ul>
		</div>
	);
};

export default Navbar;
