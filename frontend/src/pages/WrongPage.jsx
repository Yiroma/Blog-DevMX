import { Link } from "react-router-dom";

export default function WrongPage() {
  return (
    <div>
      <h1>{`Oops ! Tu t'es perdu...`}</h1>
      <p>{`Veuillez revenir à l'accueil.`}</p>
      <Link to="/">{`Retour à l'accueil`}</Link>
    </div>
  );
}
