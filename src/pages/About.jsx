import React from "react";
import Banner from "../components/Banner";
import { useBanners } from "../context/BannerContext";
import { useState, useEffect } from "react";
import Collapse from "../components/Collapse";

function About() {
  const { aboutBanner } = useBanners();
  const [aboutList, setAboutList] = useState([]);

  const fetchAboutList = async () => {
    try {
      const response = await fetch("/about.json");
      const data = await response.json();
      setAboutList(data);
    } catch (error) {
      console.log("Erreur lors de la récupération des informations", error);
    }
  };

  useEffect(() => {
    fetchAboutList();
  }, []);

  return (
    <>
      <Banner text={aboutBanner.text} image={aboutBanner.img} />
      <section className="about-section">
        {aboutList.map((about, index) => (
          <Collapse key={index} title={about.title} content={about.content} />
        ))}
      </section>
    </>
  );
}

export default About;
