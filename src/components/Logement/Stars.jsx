import fullStar from "../../assets/images/full-star.png";
import emptyStar from "../../assets/images/empty-star.png";

function Stars({ rating }) {
  return (
    <div className="descriptions__profile__stars">
      {/* Afficher les étoiles pleines */}
      {Array.from({ length: rating }, (v, idx) => (
        <img key={"full-" + idx} src={fullStar} alt="Étoile pleine" />
      ))}
      {/* Afficher les étoiles vides si le rating est inférieur à 5 */}
      {Array.from({ length: 5 - rating }, (v, idx) => (
        <img key={"empty-" + idx} src={emptyStar} alt="Étoile vide" />
      ))}
    </div>
  );
}

export default Stars;
