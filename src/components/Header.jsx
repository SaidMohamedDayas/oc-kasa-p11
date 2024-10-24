import React from "react";
import { Link, useLocation } from "react-router-dom"; // Importer useLocation
import logo from "../assets/images/logo.svg";

const Header = () => {
  const location = useLocation(); // Utiliser useLocation pour obtenir l'URL actuelle

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
            <Link
              to="/"
              className={`link ${location.pathname === "/" ? "active" : ""}`}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`link ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              À propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
