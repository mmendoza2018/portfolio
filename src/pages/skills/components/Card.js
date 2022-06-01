import React from "react";
import './card.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({srcIcon, altImg, description,bgColor}) => {
  let shadowStyle = {
    border : `.5px solid ${bgColor}4`
  }
  return (
      <div className="item-skills" >
        <figure>
        {
          bgColor!==null 
          ? <FontAwesomeIcon icon={srcIcon} color={bgColor} size='4x'/> 
          : <img src={srcIcon} alt={altImg} />
        }
          <h4>{`${description}`}</h4>
        </figure>
      </div>
  );
};

export default Card;
