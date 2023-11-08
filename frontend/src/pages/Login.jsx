import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { AuthContext } from "../context/authContext";

import Logo from "../assets/Logo-devmx.svg";
import MixyHey from "../assets/mixy/mixy-hey.webp";

export default function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChangeInput = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(inputs);
      const data = res.data;

      if (data.token) {
        Cookies.set("access_token", data.token, { expires: 1 / 24 });

        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        setError("Erreur d'identification");
      }
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="login-container">
      <form>
        <img className="logoMixyHey" src={MixyHey} alt="Mixy mascotte" />
        <img className="logoDevMX" src={Logo} alt="devMX" />
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
          <br />
          <Link to="/register"> Créer un compte</Link>
        </span>
      </form>
    </div>
  );
}
