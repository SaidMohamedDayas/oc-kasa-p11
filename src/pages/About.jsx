import React from "react";
import Banner from "../components/Banner";
import { useBanners } from "../context/BannerContext";

function About() {
  const { aboutBanner } = useBanners();

  return (
    <>
      <Banner text={aboutBanner.text} image={aboutBanner.img} />
    </>
  );
}

export default About;
