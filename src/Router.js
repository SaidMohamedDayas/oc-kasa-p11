import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout"; // Import du layout

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home /> {/* Composant enfant */}
            </Layout>
          }
        />

        <Route
          path="/about"
          element={
            <Layout>
              <About /> {/* Composant enfant */}
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
