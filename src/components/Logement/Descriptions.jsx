import Tags from "./Tags";
import Stars from "./Stars";

function Descriptions({ logement }) {
  return (
    <section className="descriptions">
      <div className="descriptions__description">
        <div className="descriptions__description__title">
          <h1 className="descriptions__description__title__name">
            {logement.title}
          </h1>
          <p className="descriptions__description__title__location">
            {logement.location}
          </p>
        </div>
        <ul className="descriptions__description__tags">
          {logement.tags.map((tag, index) => (
            <Tags key={index} tag={tag} />
          ))}
        </ul>
      </div>

      <div className="descriptions__profile">
        <div className="descriptions__profile__host">
          <p className="descriptions__profile__host__name">
            {logement.host.name}
          </p>
          <img
            className="descriptions__profile__host__picture"
            src={logement.host.picture}
            alt={logement.host.name}
          />
        </div>
        <Stars rating={logement.rating} />
      </div>
    </section>
  );
}

export default Descriptions;
