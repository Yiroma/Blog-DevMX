import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../context/authContext";

import Logo from "../assets/logo-devmx.svg";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

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
          <span>{currentUser?.user.username}</span>
          {currentUser ? (
            <span
              onClick={() => {
                logout();
                handleLogout();
              }}
            >
              Se déconnecter
            </span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
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
