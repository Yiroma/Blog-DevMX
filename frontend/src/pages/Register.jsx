import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Logo from "../assets/Logo-devmx.svg";

export default function Register() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChangeInput = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/register`, inputs);
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <form>
        <img src={Logo} alt="devMX" />
        <h1>Identifez-vous</h1>
        <label htmlFor="userNameInput">Pseudo</label>
        <input
          required
          type="text"
          id="userNameInput"
          placeholder="Pseudo"
          name="username"
          onChange={handleChangeInput}
        />
        <label htmlFor="emailInput">Email</label>
        <input
          required
          type="email"
          id="emailInput"
          placeholder="email@mail.com"
          name="email"
          onChange={handleChangeInput}
        />
        <label htmlFor="passwordInput">Mot de passe</label>
        <input
          required
          type="password"
          id="passwordInput"
          placeholder="************"
          name="password"
          onChange={handleChangeInput}
        />
        <button type="button" onClick={handleSubmit}>
          Créer un compte
        </button>
        <p>{`Erreur d'identification`}</p>
        <span>
          Vous avez déjà compte ?<Link to="/login"> Identifiez-vous</Link>
        </span>
      </form>
    </div>
  );
}
