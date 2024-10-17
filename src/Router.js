import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const AppRouter = () => {
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
        img: require("./assets/images/eric-muhr.jpeg"),
        text: "Chez vous, partout et ailleurs",
      },
      aboutBanner: {
        img: require("./assets/images/kalen-emsley.jpeg"),
        text: "",
      },
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home
                textBanner={banners.homeBanner.text}
                imageBanner={banners.homeBanner.img}
              />{" "}
              {/* Composant enfant pour la route home */}
            </Layout>
          }
        />

        <Route
          path="/about"
          element={
            <Layout>
              <About
                textBanner={banners.aboutBanner.text}
                imageBanner={banners.aboutBanner.img}
              />{" "}
              {/* Composant enfant pour la route about */}
            </Layout>
          }
        />

        <Route
          path="*"
          element={
            <Layout>
              <NotFound /> {/* Composant enfant pour la route 404 */}
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
