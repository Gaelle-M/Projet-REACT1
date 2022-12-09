import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Mentions from "./pages/Mentions";
import Politique from "./pages/Politique";
import Prestations from "./pages/Prestations";
import Realisations from "./pages/Realisations";
import Tarifs from "./pages/Tarifs";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/prestations" element={<Prestations />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/tarifs" element={<Tarifs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions" element={<Mentions />} />
        <Route path="/politique" element={<Politique />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
