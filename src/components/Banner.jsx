import React from "react";

// banner pour les deux pages Home et About à faire paramétrable
// pour l'image et le texte
// composant unique

const Banner = ({ text, image }) => {
  return (
    <section className="banner">
      <div>
        <img src={image} alt="img banner" />
        <div className="overlay"></div>
      </div>
      {text && <p>{text}</p>}
    </section>
  );
};

export default Banner;
