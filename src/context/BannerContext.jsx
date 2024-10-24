import { createContext, useState, useEffect, useContext } from "react";
import imgHomeBanner from "../assets/images/eric-muhr.jpeg";
import imgAboutBanner from "../assets/images/kalen-emsley.jpeg";

const BannerContext = createContext();

export const BannerProvider = ({ children }) => {
  const [banners, setBanners] = useState({
    homeBanner: {
      img: "",
      text: "",
    },
    aboutBanner: {
      img: "",
      text: "",
    },
  });

  useEffect(() => {
    setBanners({
      homeBanner: {
        img: imgHomeBanner,
        text: "Chez vous, partout et ailleurs",
      },
      aboutBanner: {
        img: imgAboutBanner,
        text: "",
      },
    });
  }, []);

  return (
    <BannerContext.Provider value={banners}>{children}</BannerContext.Provider>
  );
};

export const useBanners = () => useContext(BannerContext);
