import React from "react";
import "./about.css";
import Article from "./components/Article";

const About = () => {
  return (
    <section id="about" className="container-general-about">
      <h2>Conóceme</h2>
      <div className="container-about">
        <div className="item-about">
          <h3>Mi Resumen</h3>
          <Article>
            <p>
              Soy desarrollador de aplicaciones web con mas de 2 años de experiencia, implementando páginas y sistemas web.
              Autodidacta, apasionado por la tecnología.
            </p>
            <ul>
              <li>Arequipa, Perú</li>
              <li>mendoza.ing1826@gmail.com</li>
            </ul>
          </Article>
          <h3>Estudios</h3>
          <Article>
            <ul>
              <li>Universidad Nestor Caceres Velazquez - Ing. de sistemas.</li>
            </ul>
          </Article>
          <h3>Certificaciones</h3>
          <Article>
            <ul>
              <li>Certificado-java Script moderno (Udemy)</li>
              <li>Certificado-Scrum fundamental (SCRUMstudy)</li>
              <li>Certificado-React (Udemy)</li>
              <li>Certificado Node Expert (Udemy)</li>
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
              <li>
                Maquetacion de vistas responsivas implementando concepto movile
                first.
              </li>
              <li>Despliegue de paginas en la nube.</li>
            </ul>
          </Article>
          <Article>
            <h5>React developer</h5>
            <h6>Conovatec, Lima Perú</h6>
            <ul>
              <li>Maquetación de plantillas.</li>
              <li>Desarrollo y estructuración del equipo de Front-end.</li>
              <li>Testing de las funcionalidades generales.</li>
            </ul>
          </Article>
          <Article>
            <h5>full-Stack Developer</h5>
            <h6>GYT empresarial, Arequipa Péru</h6>
            <ul>
              <li>Analista de requerimientos generales del software.</li>
              <li>Diseño y maquetado de las vistas generales del proyecto</li>
              <li>
                implementación de funcionamiento general y subida del proyecto a
                la nube.
              </li>
            </ul>
          </Article>
        </div>
      </div>
    </section>
  );
};

export default About;
