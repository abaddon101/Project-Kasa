import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function HeaderComponent() {
  return (
    <header>
      <img src={logo} alt="logo"></img>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </header>
  );
}

export default HeaderComponent;
