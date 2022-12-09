import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";

const Realisations = () => {
  return (
    <div className="realisations">
      <Navigation />
      <h2>Réalisations et créations sur tout type d'ongles</h2>
      <h3>
        Découvrez toutes nos réalisations de pose d'ongles en gel uv, vernis
        semi-permanent et nail art
      </h3>
      <div className="real-container">

        <div className="real1">
          <div className="img img1"></div>
          <p>Réaliser par Sylvie</p>
        </div>

        <div className="real2">
          <div className="img img2"></div>
          <p>Réaliser par Nina</p>
        </div>
    
        <div className="real3">
          <div className="img img3"></div>
          <p>Réaliser par Isabelle</p>
        </div>

        <div className="real4">
          <div className="img img4"></div>
          <p>Réaliser par Laura</p>
        </div>

        <div className="real5">
          <div className="img img5"></div>
          <p>Réaliser par Sylvie</p>
        </div>

        <div className="real6">
          <div className="img img6"></div>
          <p>Réaliser par Laura</p>
        </div>

        <div className="real7">
          <div className="img img7"></div>
          <p>Réaliser par Isabelle</p>
        </div>

        <div className="real8">
          <div className="img img8"></div>
          <p>Réaliser par Nina</p>
        </div>
      </div>

      <div className="button-container">
        <NavLink to="/contact">
          <button>Prendre un rendez-vous</button>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Realisations;
