import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import styles from "./FooterComponent.scss";
import logoFooter from "/Users/33638/Desktop/roussel_mathieu_11_022023/src/assets/logoFooter.png";

function FooterComponent() {
  return (
    <footer className="footerBlock">
      <img className="logoFooter" src={logoFooter} alt="logo"></img>
      <p>
        <FaRegCopyright />
        2020 Kasa. All rights reserved
      </p>
    </footer>
  );
}
export default FooterComponent;
