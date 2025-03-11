import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import HomeCard from "../components/HomeCard";
import { useBanners } from "../context/BannerContext";
import logementsData from "../data/logements.json";

function Home() {
  const { homeBanner } = useBanners();
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    setLogements(logementsData);
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
