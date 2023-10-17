import { Link } from "react-router-dom";

import Logo from "../assets/logo-devmx.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <div className="links">
          <Link className="link" to="/">
            <h6>Accueil</h6>
          </Link>
          <Link className="link" to="/?cat=news">
            <h6>Actu</h6>
          </Link>
          <Link className="link" to="/?cat=event">
            <h6>Evènement</h6>
          </Link>
          <Link className="link" to="/?cat=tips">
            <h6>Tips & Astuces</h6>
          </Link>
          <Link className="link" to="/?cat=job">
            <h6>Job</h6>
          </Link>
          <span>Yiroma</span>
          <span>Se déconnecter</span>
          <span className="publish">
            <Link className="link" to="/write">
              Publier
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
