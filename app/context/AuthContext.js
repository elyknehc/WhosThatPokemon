import { useContext, createContext, useState, useEffect, use } from "react";
const AuthContext = createContext();
import {
	signInWithPopUp,
	signOut,
	onAuthStateChanged,
	GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const googleSignIn = () => {
		signInWithPopUp(auth, new GoogleAuthProvider());
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
