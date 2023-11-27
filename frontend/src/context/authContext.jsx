import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("context is not defined");
  }
  return context;
};

export const AuthContextProvider = ({ children }) => {
  const storedUser = localStorage.getItem("user");
  const initialUser = storedUser ? JSON.parse(storedUser) || null : null;
  const [currentUser, setCurrentUser] = useState(initialUser);

  const login = async (inputs) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/login`,
        inputs
      );
      setCurrentUser(res.data);

      localStorage.setItem("user", JSON.stringify(res.data));

      return res;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const logout = () => {
    Cookies.remove("access_token");

    setCurrentUser(null);

    localStorage.removeItem("user");
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};
