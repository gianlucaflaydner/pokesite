import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PokedexPage from "./pages/PokedexPage/PokedexPage";
import PokelistPage from "./pages/PokelistPage/PokelistPage";
import Header from "./components/Header/Header";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokedex" element={<PokedexPage />} />
      <Route path="/pokelist" element={<PokelistPage />} />
    </Routes>
  </Router>
);
