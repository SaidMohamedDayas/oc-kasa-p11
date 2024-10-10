import React from "react";
import logo from "../logo.svg";

const Header = () => {
  return (
    <header>
      {/* Logo */}
      <div>
        <img src={logo} alt="Logo" />
      </div>
      {/* Navigation */}
      <nav>
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
