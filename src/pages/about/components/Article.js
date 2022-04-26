import React, { Children } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import './article.css';
const Article = ({children}) => {
  return (
    <div className="contenedor-dot">
      <FontAwesomeIcon icon={faCircle} color={"white"} />
       {children}
    </div>
  );
};

export default Article;
