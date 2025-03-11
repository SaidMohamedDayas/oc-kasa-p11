import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import { useBanners } from "../context/BannerContext";
import Collapse from "../components/Collapse";
import aboutData from "../data/about.json";

function About() {
  const { aboutBanner } = useBanners();
  const [aboutList, setAboutList] = useState([]);

  useEffect(() => {
    setAboutList(aboutData);
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
