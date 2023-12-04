"use client";
import React from "react";
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

const page = () => {
	return (
		<div className="bg-blue-400 h-screen">
			<div className="flex items-center justify-center h-screen">
				<div>
					<h1>
						Leaderboards
						<br />
						Coming Soon!
					</h1>
				</div>
			</div>
		</div>
	);
};

export default page;
