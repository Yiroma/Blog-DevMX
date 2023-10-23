import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Logo from "../assets/Logo-devmx.svg";

export default function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="login-container">
      <h1>Bienvenue sur le Blog privé des DevMX</h1>
      <form>
        <img src={Logo} alt="devMX" />
        <h2>Identifez-vous</h2>
        <label htmlFor="emailInput">Email</label>
        <input
          type="email"
          id="emailInput"
          placeholder="email@mail.com"
          name="email"
          onChange={handleChangeInput}
        />
        <label htmlFor="passwordInput">Mot de passe</label>
        <input
          type="password"
          id="passwordInput"
          placeholder="************"
          name="password"
          onChange={handleChangeInput}
        />
        <button type="button" onClick={handleSubmit}>
          Se connecter
        </button>
        {err && <p>{err}</p>}
        <span>
          {`Vous n'avez pas de compte ?`}
          <Link to="/register"> Créer un compte</Link>
        </span>
      </form>
    </div>
  );
}
