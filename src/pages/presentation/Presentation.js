import React from "react";
import Button from "../../components/button/Button";
import ImgPerfil from '../../assets/img/perfil2.jpeg';
import "./presentation.css";
import cv from '../../assets/CV.pdf';

const Presentation = () => {
  return (
    <section className="container-presentation" id="home">
      <div className="item-presentation">
        <figure>
          <img src={ImgPerfil} alt="Miguel Mendoza"></img>
        </figure>
      </div>
      <div className="item-presentation">
        <h1>Miguel Mendoza</h1>
        <h3>Full-Stack Developer</h3>
        <a href={cv} download>
        <Button description={"Descargar CV"} size="btn-lg"/>
        </a>
      </div>
    </section>
  );
};

export default Presentation;