import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../context/authContext";

import Logo from "../assets/logo-devmx.svg";
import ImgUserDefault from "../assets/icons/user-default.svg";

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

        <div className="linkUserPublishContainer">
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
          </div>

          {currentUser ? (
            <div className="userContainer">
              <div className="userAndLog">
                <Link className="link" to={`/users/${currentUser.user.id}`}>
                  <span className="username">
                    {currentUser?.user.username}{" "}
                  </span>
                </Link>

                <span
                  className="link log"
                  onClick={() => {
                    logout();
                    handleLogout();
                  }}
                >
                  Se déconnecter
                </span>
              </div>
              <div className="userImg">
                <Link className="link" to={`/users/${currentUser.user.id}`}>
                  <img
                    src={
                      currentUser.user.img
                        ? `${
                            import.meta.env.VITE_BACKEND_URL
                          }/uploads/pictures/${currentUser.user.img}`
                        : ImgUserDefault
                    }
                    alt={currentUser.username}
                  />
                </Link>
              </div>
            </div>
          ) : (
            <Link className="link log" to="/login">
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
