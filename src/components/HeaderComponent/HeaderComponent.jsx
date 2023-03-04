import styles from "../HeaderComponent/HeaderComponent.scss";
import logo from "/Users/33638/Desktop/roussel_mathieu_11_022023/src/assets/logo.png";
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
