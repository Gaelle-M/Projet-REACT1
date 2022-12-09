import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";

const Tarifs = () => {
  return (
    <div className="tarifs">
      <Navigation />
      <h2>Nos tarifs</h2>
      <div className="paragraphes">
      <p>Paiement en espèces ou carte bancaire</p>
      <p>
        <span>Remise de 10%</span> lors de l'inscription pour les nouvelles
        clientes
      </p>
      </div>

      {/* **********TABLEAU1********** */}
      <div className="tableau1">
        <table>
            <tbody>
          <th>Pose en gel, dépose et répartion :</th>

          <tr>
            <td>Pose d’ongles complète gel avec chablon</td>
            <td>45€</td>
          </tr>

          <tr>
            <td>Réparation hors remplissage</td>
            <td>3€</td>
          </tr>
          <th>Prenez rendez-vous</th>
          </tbody>
        </table>
      </div>

      {/* **********TABLEAU2********** */}
      <div className="tableau2">
        <table>
            <tbody>
          <th>Remplissage :</th>

          <tr>
            <td>Remplissage</td>
            <td>30€</td>
          </tr>

          <tr>
            <td>Remplissage au-delà de 4 semaines</td>
            <td>35€</td>
          </tr>
          <th>Prenez rendez-vous</th>
          </tbody>
        </table>
      </div>

      {/* **********TABLEAU3********** */}
      <div className="tableau3">
        <table>
            <tbody>
          <th>Vernis semi-permanent :</th>

          <tr>
            <td>Pose de vernis semi-permanent</td>
            <td>27€</td>
          </tr>
          <th>Prenez rendez-vous</th>
          </tbody>
        </table>
      </div>

      {/* **********TABLEAU4********** */}
      <div className="tableau4">
        <table>
            <tbody>
          <th>Décoration :</th>

          <tr>
            <td>Pose de strass ou stickers</td>
            <td>
              À partir de 0.30€ l'unité
            </td>
          </tr>

          <tr>
            <td>Nail Art simple par ongle</td>
            <td>1€</td>
          </tr>

          <tr>
            <td>Arabesque</td>
            <td>1 à 3€</td>
          </tr>

          <tr>
            <td>Marbré</td>
            <td>1€</td>
          </tr>

          <tr>
            <td>Nail art 3D plat</td>
            <td>2€</td>
          </tr>

          <tr>
            <td>Nail art travaillé, géométrique </td>
            <td>2€</td>
          </tr>

          <tr>
            <td>Aquarelle</td>
            <td>2€</td>
          </tr>
          <th>Prenez rendez-vous</th>
          </tbody>
        </table>
      </div>

      <div className="button-container">
        <NavLink to="/prestations">
          <button>Nos prestations</button>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Tarifs;
