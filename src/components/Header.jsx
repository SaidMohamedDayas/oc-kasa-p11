import React from "react";
import logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div>
        <img className="header__logo" src={logo} alt="Logo" />
      </div>
      {/* Navigation */}
      <nav className="header__nav">
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/about">À propos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
