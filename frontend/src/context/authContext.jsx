import { createContext, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const storedUser = localStorage.getItem("user");
  const initialUser = storedUser ? JSON.parse(storedUser) || null : null;
  const [currentUser, setCurrentUser] = useState(initialUser);

  const login = async (inputs) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, inputs);
      setCurrentUser(res.data);

      localStorage.setItem("user", JSON.stringify(res.data));

      return res;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const logout = async (inputs) => {
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/logout`, inputs);

      localStorage.removeItem("user");

      Cookies.remove("access_token");

      setCurrentUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>{children}</AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};
