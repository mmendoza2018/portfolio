import React from "react";
import Button from "../../components/button/Button";
import "./presentation.css";

const Presentation = () => {
  return (
    <section className="container-presentation" id="home">
      <div className="item-presentation">
        <figure>
          <img src="https://www.rastrolab.com/wp-content/uploads/guy-headshot-business_result.webp" alt="hola"></img>
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