import React from "react";
import logo from "../assets/footer.logo.svg";

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <img src={logo} alt="logo" className="footer__left" />
      <p className="footer__copywrites">
        © 2023 Rohith. Multor Innovations Plus. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
