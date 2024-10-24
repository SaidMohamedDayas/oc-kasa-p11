import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import NotFound from "./pages/NotFound";
import { BannerProvider } from "./context/BannerContext";

const AppRouter = () => {
  return (
    <Router>
      <BannerProvider>
        <Routes>
          {/* Route Home */}
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />

          {/* Route About */}
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />

          {/* Route Logement */}
          <Route
            path="/logement/:id"
            element={
              <Layout>
                <Logement />
              </Layout>
            }
          />

          {/* Route 404 Not Found */}
          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
        </Routes>
      </BannerProvider>
    </Router>
  );
};

export default AppRouter;
