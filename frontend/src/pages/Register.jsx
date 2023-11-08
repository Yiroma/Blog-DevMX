import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Logo from "../assets/Logo-devmx.svg";
import MixyRegister from "../assets/mixy/mixy-register.webp";

export default function Register() {
  const [inputs, setInputs] = useState({
    username: "",
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
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/register`, inputs);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="login-container">
      <form>
        <img
          className="logoMixyRegister"
          src={MixyRegister}
          alt="Mixy mascotte"
        />
        <img className="logoDevMX" src={Logo} alt="devMX" />
        <h2>Enregistrez-vous</h2>
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
        {err && <p>{err}</p>}
        <span>
          Vous avez déjà compte ?
          <br />
          <Link to="/login"> Identifiez-vous</Link>
        </span>
      </form>
    </div>
  );
}
