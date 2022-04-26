import React from "react";
import Button from "../../components/button/Button";
import "./presentation.css";

const Presentation = () => {
  return (
    <section className="container-presentation">
      <div className="item-presentation">
        <figure>
          <img src="https://placeimg.com/1200/800/animals" alt="hola"></img>
        </figure>
      </div>
      <div className="item-presentation">
        <h1>Miguel Mendoza</h1>
        <h3>Front-End Developer</h3>
        <Button description={"Contactame"} size="btn-lg"/>
      </div>
    </section>
  );
};

export default Presentation;