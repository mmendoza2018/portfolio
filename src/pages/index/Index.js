import React from "react";
import Background from "../../components/background/Background";
import About from "../about/About";
import Comments from "../comments/Comments";
import Portfolio from "../portfolio/Portfolio";
import Presentation from "../presentation/Presentation";
import Skill from "../skills/Skill";
import './index.css';
import Footer from "./components/Footer";
import Contact from "../contact/Contact";

const Index = () => {
  return (
    <>
      <Background />
      <div className="container-general">
        <main className="main-general">
          <Presentation />
          <h2>Portfolio</h2>
          <Portfolio />
          <h2>Conoceme</h2>
          <About/>
          <h2>Habilidades</h2>
          <Skill />
          <h2>Recomendaciones</h2>
          <Comments/>
          <h2>Contactame 🙂</h2>
          <Contact/>
        </main>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Index;
