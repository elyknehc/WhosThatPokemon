"use client";
import {
	collection,
	addDoc,
	getDocs,
	query,
	where,
	doc,
} from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";

const getScores = async () => {
	const querySnapshot = await getDocs(query(collection(db, "userScores")));
	const scores = querySnapshot.docs.map((doc) => doc.data());
	scores.sort((a, b) => b.score - a.score); // Sort scores in descending order
	return scores.slice(0, 10); // Return only the first 10 scores
};

const page = () => {
	const [scores, setScores] = useState([]);

	useEffect(() => {
		const fetchScores = async () => {
			const scoresData = await getScores();
			setScores(scoresData);
		};

		fetchScores();
	}, []);

	return (
		<div className="bg-blue-400 h-screen">
			<div className="flex items-center justify-center h-screen">
				<div className="bg-white p-12 rounded shadow">
					<h1 className="text-2xl font-bold mb-4">Leaderboard</h1>
					{scores.map((score, idx) => (
						<div
							key={score.id}
							className="flex items-center justify-between mb-2"
						>
							<span className="text-lg">{score.userName + ": "}</span>
							<span className="text-lg">{score.score}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default page;
