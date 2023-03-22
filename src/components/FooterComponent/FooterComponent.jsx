import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import styles from "./FooterComponent.scss";
import logoFooter from "../../assets/logoFooter.png";

function FooterComponent() {
  return (
    <footer id="footerBlock">
      <div className="footerContent">
        <img className="logoFooter" src={logoFooter} alt="logo"></img>
        <p>
          <FaRegCopyright />
          2020 Kasa. All rights reserved
        </p>
      </div>
    </footer>
  );
}
export default FooterComponent;
