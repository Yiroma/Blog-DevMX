import { Link } from "react-router-dom";

import Logo from "../assets/logo-devmx.svg";
import LogoYiroma from "../assets/logo-yiroma.svg";

export default function Footer() {
  return (
    <footer>
      <Link to="/">
        <img src={Logo} alt="devMX" />
      </Link>
      <div className="credit">
        <Link to="https://github.com/Yiroma">
          <img src={LogoYiroma} alt="yiroma" />
          <p>
            <b>Yi Romaric</b>
            <br />
            2023
          </p>
        </Link>
      </div>
    </footer>
  );
}
