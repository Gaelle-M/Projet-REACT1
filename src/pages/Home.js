import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Navigation />

      {/* ********HEADER******** */}
      <div className="header">
        <div className="logo">
          <img src="./img/logo.png" alt="image du logo du site" />
        </div>
        <div className="title">
          <h1>L’ongle, véritable accessoire de mode qui sublime vos mains</h1>
          <p>
            Envie d'être belle et élégante jusqu'au bout des ongles ? Offrez
            vous un moment de beauté.
          </p>
        </div>
      </div>

      {/* ********LE SALON******** */}
      <div className="section1">
        <h2>Notre salon</h2>
        <div className="presentation">
          <div className="left-part">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum{" "}
              <span>aliquam veritatis quisquam</span> velit eos cupiditate
              consequuntur commodi libero ut error obcaecati delectus sit nihil
              impedit, tempore et voluptatibus alias atque provident in magnam.
              Repudiandae porro repellat placeat fugiat vel, explicabo at
              necessitatibus. Consequuntur, cupiditate quasi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              nemo consectetur amet sed, temporibus, quam id eos nisi quo,
              soluta mollitia. Saepe, laborum? Voluptates sequi mollitia ab ut
              fugiat ratione eius maxime fugit impedit dolores laborum illum
              soluta, molestias, optio est in numquam fuga ea eaque
              necessitatibus odit. Doloremque perspiciatis laudantium error.
              Modi fugit rem quos id praesentium hic quisquam, dolore vero!
              Aliquid a, fuga numquam vero aspernatur nulla accusantium, neque
              natus nisi doloremque quae.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nesciunt consequatur totam eos ad quidem asperiores dolorem alias
              unde distinctio tenetur, sint ipsa nostrum. Provident quibusdam
              quos quia optio consequatur fugit porro voluptates fuga
              perferendis assumenda cumque expedita vel, in ducimus tenetur
              officiis tempore explicabo dolorem totam ex dicta nulla sint eum.
              Ipsam, facilis fugit voluptatem laudantium, nesciunt et{" "}
              <span>necessitatibus deserunt </span>id voluptas quae nisi
              distinctio reprehenderit non aliquid ipsa aperiam rerum at! Veniam
              quasi laudantium corrupti deserunt. Culpa quas officiis earum,
              impedit dolores adipisci quis rerum unde eligendi provident a
              veritatis laborum quasi tempore. Ex fugit minima commodi deleniti
              perspiciatis architecto nemo, rerum nulla similique provident nisi
              ducimus ut.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              impedit cum fugit voluptates suscipit provident, incidunt
              excepturi est commodi dicta{" "}
              <span>aspernatur reprehenderit optio enim cumque</span> fuga nulla
              quasi voluptatem.
            </p>
          </div>
          <div className="right-part"></div>
        </div>

        <NavLink to="/about">
          <button>En savoir plus sur Nina Nails</button>
        </NavLink>
      </div>

      {/* *********PRESTATIONS******** */}
      <div className="section2">
        <h2>Nos prestations</h2>
        <div className="container-prestations">
          <div
            className="presta1 aos-item"
            data-aos="fade-up-right"
            data-aos-delay="200"
            data-aos-duration="1500"
            data-aos-once="false"
          >
            <h5>Pose / Dépose / Réparation</h5>
            <p>
              Pose D'ongles Complète De Gel Ou Acrylique, Dépose, Réparation
            </p>
          </div>

          <div className="presta2">
            <h5>Comblage / Remplissage</h5>
            <p>Comblage / Remplissage 2 À 5 Semaines</p>
          </div>

          <div className="presta3">
            <h5>Vernis Semi-Permanant</h5>
            <p>Sur Ongles De Mains Et De Pieds</p>
          </div>

          <div className="presta4">
            <h5>Décoration</h5>
            <p>Nail Art</p>
          </div>
        </div>

        <div className="buttons">
          <NavLink to="/prestations">
            <button>Voir nos prestations</button>
          </NavLink>
          <NavLink to="/tarifs">
            <button>Voir nos tarifs</button>
          </NavLink>
        </div>
      </div>

      {/* ********REALISATION******* */}
      <div className="section3">
        <h2>Nos réalisations</h2>
        <div className="image-container">
          <p>Travail professionnel, soigné et de qualité</p>
        </div>
        <div className="container-real">
          <div className="images">
            <p>
              <img src="./img/nail1.jpg" alt="" />
            </p>
            <p>
              <img src="./img/nail4.jpg" alt="" />
            </p>
            <p>
              <img src="./img/nail6.jpg" alt="" />
            </p>
          </div>
          <div className="images">
            <p>
              <img src="./img/nailart.jpg" alt="" />
            </p>
            <p>
              <img src="./img/nailart2.jpg" alt="" />
            </p>
            <p>
              <img src="./img/remplissage.jpg" alt="" />
            </p>
          </div>
          <div className="images-hidden">
            <img
              src="./img/nail.jpg"
              alt="collage des ralisations de manicure"
            />
          </div>
          <NavLink to="/realisations">
            <button>Voir toutes nos réalisations</button>
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
