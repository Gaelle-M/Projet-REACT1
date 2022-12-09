import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h5>Suivez-nous :</h5>
      <div className="icons-container">
        <p>
          <FontAwesomeIcon icon={faFacebook} />
        </p>
        <p>
          <FontAwesomeIcon icon={faInstagram} />
        </p>
        <p>
          <FontAwesomeIcon icon={faPinterest} />
        </p>
      </div>
      <div className="links-container">
        <NavLink to="/mentions">
          <p>Mentions légales</p>
        </NavLink>
        <NavLink to="/politique">
          <p>Politique de vie privée</p>
        </NavLink>
        <NavLink to="/contact">
          <p>Contact</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
