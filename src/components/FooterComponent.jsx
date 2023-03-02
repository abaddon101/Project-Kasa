import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import logoFooter from "../assets/logoFooter.png";

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
