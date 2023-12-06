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
	return scores;
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
				<div>
					{scores.map((score) => (
						<div key={score.id}>
							{score.userName} - {score.score}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default page;
