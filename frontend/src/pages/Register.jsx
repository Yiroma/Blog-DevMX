import { Link } from "react-router-dom";

import Logo from "../assets/Logo-devmx.svg";

export default function Register() {
  return (
    <div className="login-container">
      <form>
        <img src={Logo} alt="devMX" />
        <h1>Identifez-vous</h1>
        <label htmlFor="userNameInput">Pseudo</label>
        <input required type="text" id="userNameInput" placeholder="Pseudo" />
        <label htmlFor="emailInput">Email</label>
        <input required type="email" id="emailInput" placeholder="email@mail.com" />
        <label htmlFor="passwordInput">Mot de passe</label>
        <input required type="password" id="passwordInput" placeholder="************" />
        <button type="button">Créer un compte</button>
        <p>{`Erreur d'identification`}</p>
        <span>
          Vous avez déjà compte ?<Link to="/login"> Identifiez-vous</Link>
        </span>
      </form>
    </div>
  );
}
