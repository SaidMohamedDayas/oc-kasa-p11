import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import HomeCard from "../components/HomeCard";
import { useBanners } from "../context/BannerContext";

function Home() {
  const { homeBanner } = useBanners();
  const [logements, setLogements] = useState([]);

  const fetchLogements = async () => {
    try {
      const response = await fetch("/logements.json");
      const data = await response.json();
      setLogements(data);
    } catch (error) {
      console.log("Erreur lors de la récupération des logements", error);
    }
  };

  useEffect(() => {
    fetchLogements();
  }, []);

  return (
    <>
      <Banner text={homeBanner.text} image={homeBanner.img} />
      <section className="cards">
        {logements.map((logement) => (
          <HomeCard key={logement.id} logement={logement} />
        ))}
      </section>
    </>
  );
}

export default Home;
