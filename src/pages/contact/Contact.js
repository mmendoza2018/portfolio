import {
  faFacebook,
  faLinkedin,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Button from "../../components/button/Button";
import "./contact.css";
let defaultformContact = {
  nombre:'',
  correo:'',
  descripcion:'',
}
const Contact = ({activeAlert,closeModal}) => {
  let [camposForm, setCamposForm] = useState(defaultformContact);
  const handleForm = (e) => {
      setCamposForm({
          ...camposForm,[e.target.name]:e.target.value
      })
  }
 const handleSubmit = async (e) => {
     e.preventDefault()
     if(!camposForm || !camposForm.nombre || !camposForm.correo || !camposForm.descripcion) 
     return activeAlert('Advertencia!', 'Todos los campos son requeridos', 'warning', 2000)
      fetch("https://formsubmit.co/ajax/mendoza.ing1826@gmail.com", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            nombre: camposForm.nombre,
            correo: camposForm.correo,
            descripcion: camposForm.descripcion
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success === "true") {
          activeAlert('Perfecto!',null, 'success', 3000)
          setCamposForm(defaultformContact)
        } else {
          activeAlert('Error!', 'Vuelve a intentarlo', 'error', 3000)
        }
    })
    .catch(error => console.log(error));
     
 }
  return (
    <section id="contact" className="container-general-contact">
      <h2>Contáctame 🙂</h2>
      <div className="container-contact">
        <div className="contact-media">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
          <FontAwesomeIcon icon={faGithub} size="lg" />
          <FontAwesomeIcon icon={faGoogle} size="lg" />
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </div>
        <div className="contact-form">
          <form id="contac" onSubmit={handleSubmit}>
            <label>Nombres</label>
            <input type="text" value={camposForm.nombre} onChange={handleForm} name="nombre" />
            <label>Correo</label>
            <input type="text" value={camposForm.correo} onChange={handleForm} name="correo" />
            <label>Descripción</label>
            <textarea type="text" value={camposForm.descripcion} onChange={handleForm} name="descripcion" />
            <Button description="Enviar" size="btn-sm" clickFunction={handleSubmit} />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
