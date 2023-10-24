import { createContext, useEffect, useState } from "react";
import axios from "axios";

import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // Récupérer l'utilisateur depuis localStorage ou initialiser à null
  const storedUser = localStorage.getItem("user");
  const initialUser = storedUser ? JSON.parse(storedUser) || null : null;
  const [currentUser, setCurrentUser] = useState(initialUser);

  const login = async (inputs) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, inputs);
      setCurrentUser(response.data);

      // Sauvegarder currentUser en tant que chaîne JSON dans localStorage
      localStorage.setItem("user", JSON.stringify(response.data));

      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const logout = async (inputs) => {
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/logout`, inputs);

      // Supprimer currentUser de localStorage
      localStorage.removeItem("user");

      Cookies.remove("access_token");

      setCurrentUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Sauvegarder currentUser lorsqu'il change
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>{children}</AuthContext.Provider>
  );
};
