import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Politique = () => {
  return (
    <div className="politique">
      <Navigation />
      <h2>Gestion de la vie privée </h2>
      <h5>Le responsable du traitement de l'information est Nina Nina</h5>

      {/* *******Données personelles***** */}
      <div className="section1">
        <h3>Données Personnelles</h3>
        <p>
          En conformité avec le règlement no 2016/679, dit règlement général sur
          la protection des données, nous vous informons que les informations
          recueillies sur le site internet 'https://www.nina-nails.fr/' via les
          formulaires font l’objet d’un traitement informatisé destiné à vous
          assurer un service ou à ce que nous puissions vous répondre, et ce de
          la manière la plus appropriée, et ne seront jamais utilisées à des
          fins non prévues ni transmises à des partenaires sans votre
          autorisation. Aucune information personnelle autre que celles
          demandées dans ce cadre n’est collectée à votre insu.En outre, les
          données collectées via les traitements de données à caractère
          personnel du présent site ne font l’objet d’aucun transfert en dehors
          du territoire de l’Union Européenne
        </p>
        <p>
          Les données recueillies ne seront pas conservées plus de 3 ans :{" "}
          <br />
          – À compter de la collecte, du dernier contact ou intérêt manifesté
          pour les prospects.
          <br />
          – À compter de la fin de la relation commerciale pour les clients.
          <br />- À compter de la dernière connexion pour les utilisateurs
          enregistrés.
        </p>
        <br />
        <p>
          A l'issue de cette période les données seront anonymisées, rendant
          impossible votre identification. <br /> Les données liées à la
          facturation seront conservées 10 ans.
        </p>
      </div>

      {/* ******Accès / rectification / suppression****** */}
      <div className="section2">
        <h3>Accès, rectification, suppression</h3>
        <p>
          Conformément aux articles 39 et 40 de cette même loi, l’utilisateur de
          ce site ou le Client bénéficie des droits d’interrogation, d’accès, de
          rectification et de suppression portant sur les données le concernant
          en utilisant le formulaire de contact.
        </p>
        <p>
          Vous bénéficier d'un droit d'accès, de rectification et de suppression
          de vos données personnelles simplement en utilisant le formulaire
          situé dans la rubrique contact du présent site.
        </p>
        <p>
          Aucun système automatique n'a été mis en place afin de garantir que
          vous êtes bien le demandeur. Nous pouvons donc être amenés à vous
          demander de prouver votre identité afin d'exercer ce droit.
        </p>
      </div>

      {/* ******Consentement******* */}
      <div className="section3">
        <h3>Consentement et Preuve de Consentement</h3>
        <p>
          À chaque endroit du site où nous vous demandons votre consentement à
          l'aide d'une case a cocher une preuve de consentement est conservée
          celle ci inclue la version des mentions légales, des conditions
          générales et de la politique de confidentialité (respect de la vie
          privée). <br />
          Votre adresse IP est également enregistrée. Vous pouvez retirer votre
          consentement à tout moment en nous écrivant via le formulaire de
          contact où en cliquant sur le lien de désinscription présents dans les
          emails.
        </p>
      </div>

      {/* ******Sécurité protection données***** */}
      <div className="section4">
        <h3>Sécurité et protection des données</h3>
        <div className="part1">
          <h5>Privacy by design</h5>
          <p>
            Toutes les informations que nous vous demandons sont destinées au
            meilleur traitement possible de vos demandes ou pour vous fournir un
            service optimal. <br /> Aussi nous vous demandons le minimum
            d'informations nécessaires au traitement.
          </p>
        </div>

        <div className="part2">
          <h5>Sécurité</h5>
          <p>
            Vos données sont hébergées dans le datacenter de notre fournisseur
            en Europe (voir mentions légales). <br /> Celui-ci s'engage dans le
            plus strict respect de la RGPD/GPDR.
          </p>
        </div>

        <div className="part3">
          <h5>Fuite de données</h5>
          <p>
            En cas de fuite de données nous vous enverrons un email pour vous
            prévenir des données qui auraient pu être obtenues.
          </p>
        </div>

        <div className="part4">
          <h5>Réclamation</h5>
          <p>
            Dans le cas où vous estimeriez que nous ne respectons pas nos
            engagements sur votre vie privée, vous pouvez interpeller la CNIL{" "}
            <br />
            Commission Nationale de l'Informatique et des Libertés <br />
            3 Place du code <br />
            PARIS <br />
            Tél : 01.01.01.01.01
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Politique;
