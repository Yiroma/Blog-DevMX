import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../context/authContext";

import Logout from "../assets/icons/logout.svg";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="navMobileContainer">
      <input id="burgerToggle" type="checkbox" />
      <label className="menuBtnContainer" htmlFor="burgerToggle">
        <div className="menuBtn"></div>
      </label>
      <ul className="menu">
        <li>
          <Link className="link" to="/">
            Accueil
          </Link>
        </li>

        <li>
          <Link className="link" to="/?cat=actu">
            Actu
          </Link>
        </li>

        <li>
          <Link className="link" to="/?cat=event">
            Evènement
          </Link>
        </li>

        <li>
          <Link className="link" to="/?cat=tips">
            Tips & Astuces
          </Link>
        </li>

        <li>
          <Link className="link" to="/?cat=job">
            Job
          </Link>
        </li>

        <li>
          <div className="username">
            <Link className="link" to={`/users/${currentUser.user.id}`}>
              {currentUser?.user.username}
            </Link>

            <Link className="link" to={`/users/${currentUser.user.id}`}>
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/uploads/pictures/${
                  currentUser.user.img
                }`}
                alt={currentUser.username}
              />
            </Link>

            <img
              className="logout"
              src={Logout}
              alt="déconnexion"
              onClick={() => {
                logout();
                handleLogout();
              }}
            />
          </div>
        </li>

        <li className="publish">
          <Link className="link " to="/write">
            Publier
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
