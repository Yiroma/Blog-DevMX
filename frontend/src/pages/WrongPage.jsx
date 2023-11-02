import { Link } from "react-router-dom";

import MixySad from "../assets/mixy/mixy-sad.webp";

export default function WrongPage() {
  return (
    <div className="wrongPageContainer">
      <div className="speech">
        <h1>{`Oops ! Tu t'es perdu...`}</h1>
        <Link to="/">
          <button type="button">{`Retour à l'accueil`}</button>
        </Link>
      </div>
      <img src={MixySad} alt="Wrong page" />
    </div>
  );
}
