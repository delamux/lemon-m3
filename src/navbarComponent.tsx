import React from "react";
import ReactDOM from "react-dom";
const logoImg = require("./assets/images/logo_2.png");

export const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src={logoImg} />
      </a>
    </nav>
  );
};
