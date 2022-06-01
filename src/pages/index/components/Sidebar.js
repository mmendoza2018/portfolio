import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./sidebar.css";
import {
  faJournalWhills,
  faCode,
  faUserAlt,
  faPhone,
  faHomeAlt,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

export const Sidebar = () => {
  return (
    <ul className="sidebar-container">
      <li>
        <a href="#home">
          <FontAwesomeIcon icon={faHomeAlt} size={"xl"} color="white"/>
        </a>
      </li>
      <li>
        <a href="#portfolio">
          <FontAwesomeIcon icon={faJournalWhills} size={"xl"} color="white"/>
        </a>
      </li>
      <li>
        <a href="#about">
          <FontAwesomeIcon icon={faUserAlt} size={"xl"} color="white"/>
        </a>
      </li>
      <li>
        <a href="#skills">
          <FontAwesomeIcon icon={faCode} size={"xl"} color="white"/>
        </a>
      </li>
      <li>
        <a href="#comments">
          <FontAwesomeIcon icon={faCommentDots} size={"xl"} color="white"/>
        </a>
      </li>
      <li>
        <a href="#contact">
          <FontAwesomeIcon icon={faPhone} size={"xl"} color="white"/>
        </a>
      </li>
    </ul>
  );
};
