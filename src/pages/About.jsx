import React from "react";
import Banner from "../components/Banner";

function About({ textBanner, imageBanner }) {
  return (
    <>
      <Banner text={textBanner} image={imageBanner} />
    </>
  );
}

export default About;
