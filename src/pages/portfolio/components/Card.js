import React from 'react'
import './card.css';
import Title from 'react-vanilla-tilt';

export const Card = ({srcImg, altImg}) => {
  return (
    <figure className='item-portfolio'>
      <Title options={{ glare: true, 'max-glare': 1 }}>
      <div className='hola'>
        <img src={`${srcImg}`} alt={`${altImg}`}/>
      </div>
      </Title>
    </figure>
  )
}
