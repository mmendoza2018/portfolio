import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { faJournalWhills,faCode,faUserAlt,faPhone } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer className="container-footer">
      <div className="item-footer">
        <a href="https://google.com">
          <FontAwesomeIcon icon={faJournalWhills} />
          <small className="">Proyectos</small>
        </a>
      </div>
      <div className="item-footer">
        <a href="https://google.com"  className="btn btnAside px-1">
          <FontAwesomeIcon icon={faCode} />
          <small >Habilidades</small>
        </a>
      </div>
      <div className="item-footer">
        <a href="https://google.com"  className="btn btnAside px-1">
          <FontAwesomeIcon icon={faUserAlt} />
          <small>Conóceme</small>
        </a>
      </div>
      <div className="item-footer">
        <a href="https://google.com" className="btn btnAside px-1">
          <FontAwesomeIcon icon={faPhone} />
          <small>Contacto</small>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
