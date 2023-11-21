import { useContext, createContext, useState, useEffect } from "react";
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export const UserAuth = () => {
	return useContext(AuthContext);
};
