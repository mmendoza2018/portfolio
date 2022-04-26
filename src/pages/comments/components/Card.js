import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import './card.css';

const Card = ({comment, name, starsDb}) => {
  let Stars = [[],[],[],[],[]];
  let cont = 0;
  return (
    <div className='item-comments'>
      <div className='subitem-comments'>
        <h5>{name}</h5>
      </div>
      <div className='subitem-comments'>
        {Stars.map((e) => {
          let color = 'rgba(255, 255, 0, 0.800)';
          if(starsDb <= cont) color = 'grey';
          cont++;
          return <FontAwesomeIcon key={cont} icon={faStar} color={color} size="xs"/>
        })}
      </div>
      <div className='subitem-comments'>
      <small>{comment}</small>
      </div>
    </div>
  )
}

export default Card
