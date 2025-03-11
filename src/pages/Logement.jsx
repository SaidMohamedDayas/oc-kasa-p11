import { useParams, Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Descriptions from "../components/Logement/Descriptions";
import Collapse from "../components/Collapse";
import Slider from "../components/Logement/Slider";
import logementsData from "../data/logements.json";

function Logement() {
  const [logement, setLogement] = useState({
    tags: [],
    equipments: [],
    pictures: [],
    rating: "",
    host: { name: "", picture: "" },
  });
  const [logementFound, setLogementFound] = useState(true);

  let { id } = useParams();

  useEffect(() => {
    const logementTrouve = logementsData.find((logement) => logement.id === id);
    if (logementTrouve) {
      setLogement(logementTrouve);
    } else {
      setLogementFound(false);
    }
  }, [id]);

  if (!logementFound) {
    return <Navigate to="/notfound" replace />;
  }

  return (
    <>
      <Slider slider={logement.pictures} />
      <Descriptions logement={logement} />
      <section className="collapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </section>
    </>
  );
}

export default Logement;
