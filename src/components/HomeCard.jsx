import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ logement }) => {
  // Récupération d'une image aléatoire parmi celles du logement ou pas ?
  const randomIndex = Math.floor(Math.random() * logement.pictures.length);
  const randomImage = logement.pictures[randomIndex];

  return (
    <Link to={`/logement/${logement.id}`}>
      <article
        className="card"
        style={{ backgroundImage: `url(${randomImage})` }}
      >
        <div className="card__img"></div>
        <h2 className="card__title">{logement.title}</h2>
      </article>
    </Link>
  );
};

export default HomeCard;
