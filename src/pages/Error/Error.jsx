// import { Router } from "react-router-dom";
import styles from "./Error.scss";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <header className="headerBox">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <p>
          <Link to="/">Retourner sur la page d'accueil</Link>
        </p>
      </header>
    </div>
  );
}
export default Error;
