import React, { useEffect, useState } from "react";
import { Card } from "./components/Card";
import dplace from "../../assets/img/dplace3.png";
import wordpress from "../../assets/img/wordpress.png";
import stripe from "../../assets/img/stripe.jpg";
import ong from "../../assets/img/ong5.png";
import conovatec from "../../assets/img/conovatec.jpg";
import gyt from "../../assets/img/emp.PNG";
import cluster from "../../assets/img/logo-cluster.jpeg";
import paita from "../../assets/img/logo-paita.png";
import "./portfolio.css";
import Button from "../../components/button/Button";

let movileInitial = true;
let showMoreInitial = true;
async function responsive() {
  let breakpoint = window.matchMedia("(min-width: 500px)").matches;
  if (breakpoint) {
    movileInitial = false;
    showMoreInitial = false;
  } else {
    movileInitial = true;
    showMoreInitial = true;
  }
}
responsive();
const Portfolio = ({ openModal3, renderContentModal }) => {
  const [movile, setMovile] = useState(movileInitial);
  const [showMore, setShowMore] = useState(showMoreInitial);

  useEffect(() => {
    showCardsFunction();
  }, []);
  const showCardsFunction = () => {
    if (movile === null) return;
    if (movile) {
      showMore ? setShowMore(false) : setShowMore(true);
    } else {
      setShowMore(true);
    }
  };
  const toogleCards = () => {
    showMore ? setShowMore(false) : setShowMore(true);
    showCardsFunction();
  };
  return (
    <section id="portfolio" className="container-general-portfolio">
      <h2>Portafolio</h2>
      <div className="container-portfolio">
        <Card
          srcImg={conovatec}
          altImg={"Portafolio | Miguel Mendoza"}
          clickFunction={openModal3}
          renderContentModal={renderContentModal}
          id={0}
        />
        <Card
          srcImg={wordpress}
          altImg={"Portafolio | Miguel Mendoza"}
          clickFunction={openModal3}
          renderContentModal={renderContentModal}
           id={1}
        />
        <Card
          srcImg={dplace}
          altImg={"Portafolio | Miguel Mendoza"}
          clickFunction={openModal3}
          renderContentModal={renderContentModal}
           id={2}
        />
        <Card
          srcImg={stripe}
          altImg={"Portafolio | Miguel Mendoza"}
          clickFunction={openModal3}
          renderContentModal={renderContentModal}
           id={3}
        />
        <Card
          srcImg={cluster}
          altImg={"Portafolio | Miguel Mendoza"}
          clickFunction={openModal3}
          renderContentModal={renderContentModal}
           id={4}
        />
        <Card
          srcImg={paita}
          altImg={"Portafolio | Miguel Mendoza"}
          clickFunction={openModal3}
          renderContentModal={renderContentModal}
           id={5}
        />
        
        {showMore ? (
          <Card
            srcImg={gyt}
            altImg={"imagen xd"}
            clickFunction={openModal3}
            renderContentModal={renderContentModal}
             id={6}
          />
        ) : (
          ""
        )}
        {showMore ? (
          <Card
            srcImg={ong}
            altImg={"imagen xd"}
            clickFunction={openModal3}
            renderContentModal={renderContentModal}
             id={7}
          />
        ) : (
          ""
        )}
        {showMore || (
          <Button
            description={!showMore ? "Ver más" : "Ver menos"}
            size="btn-sm"
            clickFunction={toogleCards}
          />
        )}
      </div>
    </section>
  );
};

export default Portfolio;
