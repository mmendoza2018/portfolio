import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJournalWhills,faCode,faUserAlt,faPhone } from "@fortawesome/free-solid-svg-icons";
const Footer = ({direction}) => {
  return (
    <footer className={`${direction === 'top' && 'show-footer'} container-footer`}>
      <div className="item-footer">
        <a href="#portfolio">
          <FontAwesomeIcon icon={faJournalWhills} />
          <small className="">Proyectos</small>
        </a>
      </div>
      <div className="item-footer">
        <a href="#about"  className="btn btnAside px-1">
          <FontAwesomeIcon icon={faUserAlt} />
          <small>Conóceme</small>
        </a>
      </div>
      <div className="item-footer">
        <a href="#skills"  className="btn btnAside px-1">
          <FontAwesomeIcon icon={faCode} />
          <small >Habilidades</small>
        </a>
      </div>
      <div className="item-footer">
        <a href="#contact" className="btn btnAside px-1">
          <FontAwesomeIcon icon={faPhone} />
          <small>Contacto</small>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
