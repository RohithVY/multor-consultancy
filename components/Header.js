import React from "react";
import logo from "../assets/education.logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <a href="#" className="header__navbar">
          <img src={logo} alt="logo" className="logo" />
        </a>
        <div className="header__heading">
          Streamline Your Schedule with Innovative Solutions
        </div>
        <div className="header__para">
          Maximize your productivity and efficiency with Innovative Solutions'
          seamless appointment booking system, allowing you to take control of
          your schedule and prioritize your commitments.
        </div>
      </div>
    </div>
  );
};

export default Header;
