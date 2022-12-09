import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Mentions = () => {
  return (
    <div className="mentions">
      <Navigation />
      <h2>Mentions légales</h2>
      <div className="section1">
        <p>Le présent site est la propriété de Nina Nails</p>
        <p>25 avenue du code</p>
        <p>Tel : 06.06.06.06.06</p>
        <p>Siret : 12312312312312</p>
      </div>

      {/* ******Responsabilté éditoriale******* */}
      <div className="section2">
        <h3>Responsabilité éditoriale</h3>
        <p>Le directeur de la publication est Nina Nina</p>
        <p>Téléphone : 06.06.06.06.06</p>
      </div>

      {/* ***********Hébergement site******** */}
      <div className="section3">
        <h3>Hébergement et conception du site</h3>
        <p>
          La conception et l’hébergement du présent site est assurée par LOREM
          IPSUM
        </p>
        <p> représentée par son Gérant NINA NINA</p>
        <p>
          {" "}
          dont le siège social est situé au 9 rue du code 13000 Marseille,
          FRANCE
        </p>
        <p> RCS 123 123 123 00020, TVA FR00 147 147 147</p>
        <p>Téléphone : 06.20.20.20.20</p>
      </div>

      {/* *********Hébergement technique******** */}
      <div className="section4">
        <h3>Hébergement Technique</h3>
        <p>LOREM IPSUM</p>
        <p>20 bulevard du code 13000 Marseille, FRANCE</p>
        <p>immatriculée sous le numéro 155 155 155 RCS MARSEILLE</p>
      </div>

      {/* *********Conditions générales******** */}
      <div className="section5">
        <div className="part1">
        <h3>Conditions Générales d'Utilisation</h3>
        <h5>Art. 1 : Définitions</h5>
        <p>Dans l’ensemble du document seront appelés :</p>
        <p>- Utilisateur : Toute personne navigant simplement sur le site nina-nails.fr.<br />
            - Utilisateur inscrit : Toute personne enregistrée sur le site nina-nails.fr. Un
            utilisateur inscrit est également un utilisateur.</p>
        </div>

        <div className="part2">
        <h5>Art. 2 : Objet</h5>
        <p>Les présentes Conditions Générales d’Utilisation fixent les termes et conditions selon lesquelles nina-nails.fr fournit les services aux utilisateurs et utilisateurs inscrits.<br />Toute utilisation des services et contenus présents sur le site nina-nails.fr se
        fera dans le respect des présentes conditions.
        </p>
        </div>

        <div className="part3">
        <h5>Art. 3 : Acceptation des conditions générales d’utilisation</h5>
        <p>Pour pouvoir utiliser les services de ninaa-nails.fr, l’utilisateur doit disposer d’un accès Internet demeurant à la charge de l’utilisateur.</p>
        <p>Nina Nails s’efforce de fournir le service accessible 7J/7, 24h/24, 365 jours par an.</p>
        <p>Ceci étant, les aléas du réseau font que le service Internet peut être inaccessible lors des opérations de maintenance du serveur par l'hebergeur final, ou ses partenaires ou des opérations de maintenance de tout ou partie de nina-nails.fr.</p>
        <p>Ainsi Nina Nails peut rendre indisponible un ou plusieurs services, ou l’intégralité des services sans aucun préavis ni dédommagement.</p>
        <p>L’utilisateur accepte le fait que Nina Nails ou ses fournisseurs ne pourront être en cas tenus pour responsables de tout dommage matériel et/ou immatériel, direct et/ou indirect découlant de l’utilisation ou de l’impossibilité d’utiliser le service.</p>
        <p>L’utilisateur garantit connaître les risques de l’internet, ses caractéristiques et ses limites. Ainsi que le fait que Internet est un réseau ouvert ne pouvant être maîtrisé par Nina Nails, et que les échanges de données ne sont en aucun cas protégés contre les risques de détournement et de piratage éventuels. S'il était porté à la connaissance de Nina Nails ou de LOREM IPSUM SARL qu’une de ses bases de données avait été piratée, malgré l’attention particulière portée à la protection de ses données, l’utilisateur en serait informé en page d’accueil du site mais aucun
        dédommagement ne pourrait être demandé.</p>
        <p>L’utilisateur connaît également les contraintes techniques, les temps de réponses, et les possibilités qu’offre le réseau, ainsi en aucun cas Nina Nails ne pourra être responsable d’un temps d’accès très lent au réseau.</p>
        <p>D’autre part, l’utilisateur est responsable de toutes les données téléchargées. Notamment, et la liste n’est pas limitative, des différents téléchargements pouvant contenir virus, chevaux de Troie, spyware ou tout autre malware.</p>
        <p>L’utilisateur garantit connaître les règles de bon usage de l’internet et du respect des personnes sur le réseau ainsi que la Netiquette mais aussi la Charte Internet consultable sur Internet.</p>
        </div>

        {/* *********Données personelles******** */}
        <div className="part5">
        <h5>Art. 4 : Données Personnelles</h5>
        <p>Les Cookies : nina-nails.fr utilise les cookies à seul fin de permettre une accessibilité accrue aux services.</p>
        <p>Le présent site utilise un système de cookies pour connaître simplement la fréquentation du site.</p>
        </div>

        {/* *******Utilisateurs enregistrés******* */}
        <div className="part6">
        <h5>Art. 5 : Utilisateur Enregistré</h5>
        <p>Est déclaré comme utilisateur enregistré un utilisateur qui a renseigné sur le formulaire d’inscription un login (alias ou nom d’utilisateur), un mot de passe et une adresse Email valide, ou a utilisé les services de connexion rapides Facebook, Twitter, Google ou autres.</p>
        <p>Un utilisateur enregistré a validé les présentes conditions d’utilisation dans leur intégralité.</p>
        <p>L’accès au compte est strictement réservé à la personne physique inscrite. Ainsi tout utilisation du compte sera considérée comme étant effectuée par la personne inscrite.</p>
        <p>nina-nails.fr, conformément à la loi LEN, enregistre les adresses IP de chaque utilisateur enregistré pour une durée au moins égale à 6 mois.</p>
        </div>

        {/* **********Propriété intellectuelle****** */}
        <div className="part7">
        <h5>Art. 6 : Propriété Intellectuelle</h5>
        <p>ninaa-nails.fr respecte la propriété intellectuelle.</p>
        <p>L’utilisateur reconnaît que chaque élément dont l’auteur ne serait pas spécifié par un nom de personnalité physique, morale ou par un alias, est la propriété unique de Nina Nails. Par conséquent ces éléments ne peuvent pas être repris partiellement ou en totalité sans accord écrit de Nina Nails</p>
        <p>L’utilisateur enregistré cède gratuitement, et expressément sans réserve, les droits sur l’ensemble des éléments qu’il met en ligne sur ninaa-nails.fr et ceci sans aucune limitation : reproduction, représentation, adaptation, sur tous supports connus ou encore inconnus à ce jour, mondialement et pour la durée légale du droit d’auteur. Ces éléments deviennent, dès validation et mise à disposition sur le réseau, la propriété de Nina Nails. Toutefois, l’utilisateur enregistré reste l’auteur de l’élément et sa paternité sera affichée clairement à proximité de l’élément.</p>
        <p>Toute personne déposant un élément sur laetitia-nails.fr est réputée être le propriétaire de l’élément et disposer de tous les droits et autorisations nécessaires sur cet élément (droits de la personnalité et à l’image, droits sur les éléments architecturaux…). Ainsi en cas de fraude avérée, ou de litige, la responsabilité incomberait à l’utilisateur et Nina Nails ne pourrait être en aucun cas tenu responsable, seul ou solidairement.</p>
        </div>

        <div className="part8">
        <h5>Art. 7 : Réglementation de l’utilisation des services</h5>
        <p>nina-nails.fr propose des services gratuits ou payants qu’il fournit lui même ou par l’intermédiaire de ses partenaires.</p>
        </div>

        <div className="part9">
        <h5>Art. 8 : Indemnisation</h5>
        <p>L’utilisateur s’engage à garantir et indemniser Nina Nails ainsi que ses partenaires et dirigeants contre tout dommage, plainte ou demande émanant d’un tiers consécutivement à l’affichage, la transmission, l’envoi, le téléchargement de contenu par l’utilisateur ou toute personne ayant eu accès au compte de l’utilisateur enregistré, à l’utilisation du service ou des droits d’autrui ou de l’ordre public. Cette garantie comprend les frais de justice et les différentes indemnisations aux victimes et ayants droit.</p>
        </div>

        <div className="part10">
        <h5>Art. 9 : Loi applicable, attribution de compétence</h5>
        <p>Les présentes conditions d’utilisation sont soumises à la loi française. Toute contestation relative à l’exécution ou l’interprétation de ces conditions générales de vente sont de la compétence exclusive du Tribunal du siège social de Nina Nails, même en cas de pluralité de défendeurs.</p>
        <p>Si l'une quelconque des stipulations des présentes conditions est tenue pour nulle et sans objet, elle sera réputée non écrite et n'entraînera pas la nullité des autres stipulations.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mentions;
