import React from "react";
import Footer from "../components/Footer";
import Formulaire from "../components/Formulaire";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <h2>Contact</h2>
      <p>
        Vous avez une demande particulière ? Une question ? Un projet ? Un
        mariage ?
      </p>
      <p>N'hésitez pas à nous contacter :</p>

     <Formulaire /> 

      <div className="infos-contact">
        <p>Pour prendre un rendez-vous, vous pouvez nous contacter par téléphone, mail ou message privé sur nos réseaux sociaux (facebook et Instagram)</p>
        <div className="contactUs">
            <p>Téléphone : 04.04.04.04.04</p> 
            <p>Portable: 06.06.06.06.06</p>
            <p>Adresse mail : ninanails_rdv@gmail.com</p>  
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
