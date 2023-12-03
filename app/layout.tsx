"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<title> Who's That Pokémon? </title>
			<link rel="icon" href="/favicon.ico" sizes="any" />
			<body className={inter.className}>
				<AuthContextProvider>
					<Navbar />
					{children}
				</AuthContextProvider>
			</body>
		</html>
	);
}
