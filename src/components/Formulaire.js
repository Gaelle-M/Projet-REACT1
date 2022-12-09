import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Formulaire = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_xcfn7qv",
        "template_tcvyyh8",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          // console.log(result.text);
          form.current.reset();
          formMess.innerHTML = "<p class='success'>Message envoyé !</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        },
        (error) => {
          // console.log(error.text);
          formMess.innerHTML =
            "<p class='error'>Une erreur s'est produite, veuillez réessayer</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 4500);
        }
      );
  };

  return (
    <div className="formulaire">
      <form ref={form} onSubmit={sendEmail}>
        <div className="labels">
          <label>Nom :</label>
        </div>
        <input type="text" name="name" required autoComplete="off" />
        <div className="labels">
          <label>Prénom :</label>
        </div>
        <input type="text" name="firstname" required autoComplete="off" />
        <div className="labels">
          <label>Email :</label>
        </div>
        <input type="email" name="email" required autoComplete="off" />
        <div className="labels">
          <label>Message :</label>
        </div>
        <textarea name="message" />
        <input type="submit" value="Envoyer" required />
      </form>

      <div className="form-message"></div>
    </div>
  );
};

export default Formulaire;
