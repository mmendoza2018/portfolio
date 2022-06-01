import {
  faFacebook,
  faLinkedin,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../../components/button/Button";
import "./contact.css";

const Contact = () => {
  const handlerForm = () => {};
  return (
    <section id="contact" className="container-general-contact">
      <h2>Contactame 🙂</h2>
      <div className="container-contact">
        <div className="contact-media">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
          <FontAwesomeIcon icon={faGithub} size="lg" />
          <FontAwesomeIcon icon={faGoogle} size="lg" />
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </div>
        <div className="contact-form">
          <form id="contac">
            <label>Nombres</label>
            <input type="text" onChange={handlerForm} name="" />
            <label>Correo</label>
            <input type="text" onChange={handlerForm} name="" />
            <label>Descripción</label>
            <textarea type="text" onChange={handlerForm} name="" />
            <Button description="Enviar" size="btn-sm" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
