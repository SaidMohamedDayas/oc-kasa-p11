import React from "react";
import logoFooter from "../logo-footer.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logoFooter} alt="Logo" />
      </div>
      <p>&copy; 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
