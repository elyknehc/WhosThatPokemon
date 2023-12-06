import { useContext, createContext, useState, useEffect } from "react";
const AuthContext = createContext();
import {
	signInWithPopup,
	signOut,
	onAuthStateChanged,
	GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const googleSignIn = () => {
		try {
			signInWithPopup(auth, new GoogleAuthProvider());
		} catch (error) {
			console.log(error);
		}
	};

	const logOut = () => {
		signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setUser(user);
		});
		return unsubscribe;
	}, [user]);
	return (
		<AuthContext.Provider value={{ user, googleSignIn, logOut }}>
			{children}
		</AuthContext.Provider>
	);
};

export const UserAuth = () => {
	return useContext(AuthContext);
};
