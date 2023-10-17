import { Link } from "react-router-dom";

import Logo from "../assets/Logo-devmx.svg";

export default function Login() {
  return (
    <div className="login-container">
      <h1>Bienvenue sur le Blog privé des DevMX</h1>
      <form>
        <img src={Logo} alt="devMX" />
        <h2>Identifez-vous</h2>
        <label htmlFor="emailInput">Email</label>
        <input type="email" id="emailInput" placeholder="email@mail.com" />
        <label htmlFor="passwordInput">Mot de passe</label>
        <input type="password" id="passwordInput" placeholder="************" />
        <button type="button">Se connecter</button>
        <p>{`Erreur d'identification`}</p>
        <span>
          {`Vous n'avez pas de compte ?`}
          <Link to="/register"> Créer un compte</Link>
        </span>
      </form>
    </div>
  );
}
