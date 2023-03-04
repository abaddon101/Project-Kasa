import styles from "../HeaderComponent/HeaderComponent.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function HeaderComponent() {
  return (
    <header>
      <img src={logo} alt="logo"></img>
      <nav className="headerMenuNav">
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </header>
  );
}

export default HeaderComponent;
