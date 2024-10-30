import { useParams, Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Descriptions from "../components/Logement/Descriptions";
import Collapse from "../components/Collapse";
import Slider from "../components/Logement/Slider";

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
    fetch("/logements.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((datas) => {
        const logementTrouve = datas.find((logement) => logement.id === id);
        if (logementTrouve) {
          setLogement(logementTrouve);
        } else {
          setLogementFound(false);
        }
      })
      .catch((error) =>
        console.log("Erreur lors de la récupération des logements", error)
      );
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
