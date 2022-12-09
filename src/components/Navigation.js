import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? "show_nav" : "hide-nav"}`}>
      <div className="navbar_logo">
        <img src="./img/logo_nav.png" alt="" />
      </div>
      <ul>
        <NavLink to="/">
          <li className="slideInDown-1">Accueil</li>
        </NavLink>
        <NavLink to="/about">
          <li className="slideInDown-2">À propos</li>
        </NavLink>
        <NavLink to="/prestations">
          <li className="slideInDown-3">Prestations</li>
        </NavLink>
        <NavLink to="/realisations">
          <li className="slideInDown-4">Réalisations</li>
        </NavLink>
        <NavLink to="/tarifs">
          <li className="slideInDown-5">Tarifs</li>
        </NavLink>
        <NavLink to="/contact">
          <li className="slideInDown-6">Contact</li>
        </NavLink>
      </ul>
      <button className="navbar_burger" onClick={handleShowLinks}>
        <span className="burger_bar"></span>
      </button>
    </nav>
  );
};

export default Navigation;
