import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../context/authContext";

import Logout from "../assets/icons/logout.svg";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleToggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className={`navMobileContainer ${isMobileNavOpen ? "open" : ""}`}>
      <input
        id="burgerToggle"
        type="checkbox"
        checked={isMobileNavOpen}
        onChange={handleToggleMobileNav}
      />
      <label className="menuBtnContainer" htmlFor="burgerToggle">
        <div className="menuBtn"></div>
      </label>
      <ul className="menu">
        <li>
          <Link className="link" to="/" onClick={handleToggleMobileNav}>
            Accueil
          </Link>
        </li>

        <li>
          <Link className="link" to="/?cat=actu" onClick={handleToggleMobileNav}>
            Actu
          </Link>
        </li>

        <li>
          <Link className="link" to="/?cat=event" onClick={handleToggleMobileNav}>
            Evènement
          </Link>
        </li>

        <li>
          <Link className="link" to="/?cat=tips" onClick={handleToggleMobileNav}>
            Tips & Astuces
          </Link>
        </li>

        <li>
          <Link className="link" to="/?cat=job" onClick={handleToggleMobileNav}>
            Job
          </Link>
        </li>

        <li>
          <div className="username">
            <Link
              className="link"
              to={`/users/${currentUser.user.id}`}
              onClick={handleToggleMobileNav}
            >
              {currentUser?.user.username}
            </Link>

            <Link
              className="link"
              to={`/users/${currentUser.user.id}`}
              onClick={handleToggleMobileNav}
            >
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/uploads/pictures/${currentUser.user.img}`}
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
          <Link className="link " to="/write" onClick={handleToggleMobileNav}>
            Publier
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
