import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";

const Prestations = () => {
  return (
    <div className="prestations">
      <Navigation />
      <h2>Les différentes prestations proposées</h2>

      {/* *********Partie "pose complète"********** */}
      <section className="section1">
        <div className="img1"></div>
        <div className="para1">
          <h5>La pose complète</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus odit
            voluptatem, porro eligendi aliquid suscipit dolor iure corrupti
            libero cumm.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            voluptate rem, aspernatur nemo fuga, beatae itaque ipsum placeat
            quos ut, eius officiis. Distinctio nulla est expedita molestias, aut
            perferendis nostrum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            maiores, possimus, laborum animi consectetur eum rerum fugit
            temporibus et ad ea labore vel. Nobis doloribus sequi amet, unde hic
            commodi, labore tempora excepturi, modi optio eligendi suscipit
            mollitia iusto nostrum quo harum fugiat.
          </p>
        </div>
      </section>

      {/* **********Partie "comblage/remplissage"********** */}
      <section className="section2">
        <div className="para2">
          <h5>Le complage / Remplissage</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            perspiciatis possimus delectus? Odit voluptates veritatis ipsa saepe
            maiores, ratione magnamm.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus atque tempore consequuntur. Non quasi at beatae
            consectetur debitis ab repellat asperiores nisi error, ipsum ex nam,
            excepturi optio reiciendis qui.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            exercitationem consequuntur iure nihil perspiciatis consequatur.
            Dicta, ab placeat vero temporibus odit ipsa.
          </p>
        </div>
        <div className="img2"></div>
      </section>

      {/* **********Partie "gainage"********** */}
      <section className="section3">
        <div className="img3"></div>
        <div className="para3">
          <h5>Le gainage (sur ongles naturels)</h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            temporibus animi accusantium facere eligendi ad praesentium
            similique eveniet perspiciatis. Doloremque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            blanditiis provident? Alias repudiandae facere ipsam! Reprehenderit
            deserunt veritatis repudiandae facilis magni minima omnis atque
            expedita, necessitatibus pariatur id asperiores nihil.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti,
            sequi.
          </p>
        </div>
      </section>

      {/* **********Partie "VSP"********** */}
      <section className="section4">
        <div className="para4">
          <h5>VSP : Vernis semi-permanent</h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
            voluptatem dicta harum minus reiciendis, placeat molestias veritatis
            illum perspiciatis quo quaerat eius incidunt odio fugit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            atque inventore reprehenderit reiciendis voluptate id facere,
            deserunt repellat optio necessitatibus cumque quo. Aperiam iure
            dignissimos perferendis distinctio omnis autem nihil.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            sit laborum explicabo nisi.
          </p>
        </div>
        <div className="img4"></div>
      </section>

      {/* **********Partie "Nail Art"********** */}
      <section className="section5">
        <div className="img5"></div>
        <div className="para5">
          <h5>Nail Art</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            animi eos fugiat dolore. Doloribus officia pariatur tempore numquam
            sint rem dicta, perspiciatis blanditiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            culpa harum sapiente, praesentium voluptatibus sed natus ducimus ut
            in eaque officiis minima eum quo similique.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            magnam quasi distinctio, nisi et numquam repellendus enim
            necessitatibus explicabo voluptas quam aperiam illo eligendi
            exercitationem, excepturi libero neque molestiae sapiente.
          </p>
        </div>
      </section>

      {/* **********Partie "dépose"********** */}
      <section className="section6">
        <div className="para6">
          <h5>VSP : La dépose</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus dolorum animi tempora quibusdam nulla maiores obcaecati
            placeat explicabo vero? Ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            sunt ut aperiam quo quaerat, sequi totam porro quam ullam dolores,
            autem incidunt voluptates velit sed ea minima quia, eos impedit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            fugit. Id animi error ullam quia a adipisci esse quis cupiditate
            dolore, earum architecto, ratione libero.
          </p>
        </div>
        <div className="img6"></div>
      </section>
      <div className="button-container">
        <NavLink to="/tarifs">
          <button>Voir nos tarifs</button>
        </NavLink>
      </div>

      {/* *******Partie du bas********* */}
      <div className="bottom-part">
        {/* ******Section 1****** */}
        <div className="section1-bottom">
          <h2>Quelques conseils</h2>
          <p>
            Aut ipsum aut quia asperiores sed eaque molestiae aut quia quam et
            quia aliquid sit perspiciatis eius
          </p>
          <div className="list1">
            <p>
              ○ Est nemo nisi ut illum possimus et voluptatibus nulla est quis
              fugiat lorem ipsum dolor sit amet.
            </p>
            <p>
              ○ Et internos accusamus 3-5 possimus lorem ipsum dolor sit amet.
            </p>
            <p>
              ○ Est nemo nisi ut illum possimus et voluptatibus nulla est quis
              fugiat.
            </p>
            <p>○ Sed atque iste non veniam vept cum voluptatem.</p>
            <p>
              ○ Et culpa voluptatem est praesentium amet sit deleniti fuga et
              earum.
            </p>
            <p>
              ○ Aut quos voluptate sit tempora lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
            <p>○ Voluptatibus quae et maxime eius aut illum quae.</p>
          </div>
        </div>

        {/* ******Section 2****** */}
        <div className="section2-bottom">
          <h2>Les conditions préalables</h2>
          <p>
            Aut ipsum aut quia asperiores sed eaque molestiae aut quia quam et
            quia aliquid sit perspiciatis eius
          </p>
          <div className="list2">
            <p>○ Et internos accusamus amet sit deleniti fuga et earum.</p>
            <p>
              ○ Est nemo nisi ut illum possimus et voluptatibus nulla est quis
              fugiat.
            </p>
            <p>
              ○ Est nemo nisi ut illum possimus et voluptatibus nulla est quis
              fugiat.
            </p>
            <p>○ Sed atque iste non veniam vept cum voluptatem.</p>
            <p>
              ○ Et culpa voluptatem est praesentium amet sit deleniti fuga et
              earum.
            </p>
            <p>
              ○ Est nemo nisi ut illum possimus et voluptatibus nulla est quis
              fugiat.
            </p>
            <p>
              ○ Aut quos voluptate sit tempora voluptatibus quae et maxime eius
              aut illum quae.
            </p>
          </div>
        </div>
      </div>
      <div className="button-container">
        <NavLink to="/contact">
          <button>Nous contacter</button>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Prestations;
