import React from "react";
import Banner from "../components/Banner";
import HomeGallery from "../components/HomeGallery";

function Home({ textBanner, imageBanner }) {
  return (
    <>
      <Banner text={textBanner} image={imageBanner} />
      <HomeGallery />
    </>
  );
}

export default Home;
