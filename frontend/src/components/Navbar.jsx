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
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/">
            <h6>Accueil</h6>
          </Link>
          <Link className="link" to="/?cat=actu">
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

          {currentUser ? (
            <div>
              <Link className="link" to={`/users/${currentUser.user.id}`}>
                <span>{currentUser?.user.username} </span>
              </Link>
              <span
                onClick={() => {
                  logout();
                  handleLogout();
                }}
              >
                Se déconnecter
              </span>
            </div>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="publish">
            {currentUser ? (
              <Link className="link" to="/write">
                Publier
              </Link>
            ) : (
              <Link className="link" to="/login">
                Publier
              </Link>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
