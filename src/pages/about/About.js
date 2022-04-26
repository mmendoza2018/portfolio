import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "./about.css";
import Article from "./components/Article";

const About = () => {
  return (
    <section className="container-about">
      <div className="item-about">
        <h3>Mi Resumen</h3>
        <Article>
          <p>
            Soy desarrollador de aplicaciones web con 1 año de experiencia
            implementando paginas webs y sistemas web de gran utilidad,
            completamente responsivos y de facil comprension para el usuario
            final.
          </p>
          <ul>
            <li>Arequipa, Perú</li>
            <li>mendoza.ing1826@gmail.com</li>
            <li>23 años</li>
          </ul>
        </Article>
        <h3>Estudios</h3>
        <Article>
        <ul>
            <li>Universidad Nestor Caceres Velzaques - Ing. de sistemas.</li>
          </ul>
        </Article>
      </div>
      <div className="item-about">
        <h3>Experiencia</h3>
        <Article>
          <h5>front-End Developer</h5>
          <h6>Dplace, Santiago Chile</h6>
          <ul>
            <li>Diseño y prototipado de plantillas.</li>
            <li>Maquetacion de vistas responsivas implementando concepto movile first.</li>
            <li>Despliegue de paginas en la nube.</li>
          </ul>
        </Article>
        <Article>
          <h5>React developer</h5>
          <h6>Conovatec, Lima Perú</h6>
          <ul>
            <li>Maquetacion de plantillas.</li>
            <li>Desarrollo y estructuracion del equipo de Front-end.</li>
            <li>Testing de las funcionalidades generales.</li>
          </ul>
        </Article>
        <Article>
          <h5>front-End Developer</h5>
          <h6>FreeLance</h6>
          <ul>
            <li>Maquetacion de plantillas para Wordpress.</li>
            <li>Implementacion de scripts.</li>
          </ul>
        </Article>
        <Article>
          <h5>full-Stack Developer</h5>
          <h6>Dplace, Santiago Chile</h6>
          <ul>
            <li>Analista de requerientos generales del software.</li>
            <li>Diseño y maquetado de las vistas generales del proyecto</li>
            <li>implementacion de funcionamiento general y subida del proyecto a la nube.</li>
          </ul>
        </Article>
      </div>
    </section>
  );
};

export default About;
