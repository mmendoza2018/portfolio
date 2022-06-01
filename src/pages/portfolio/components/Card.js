import React from 'react'
import './card.css';
import Title from 'react-vanilla-tilt';

export const Card = ({srcImg, altImg,clickFunction, renderContentModal,id}) => {
  const handleClick = (e) => {
    clickFunction();
    renderContentModal(e.target.dataset.id);
  }
  return (
    <figure className='item-portfolio'  onClick={(e) => handleClick(e)}>
      <Title options={{ glare: true, 'max-glare': 1 }}>
      <div className='hola'>
        <img src={`${srcImg}`} data-id={id} alt={`${altImg}`}/>
      </div>
      </Title>
    </figure>
  )
}
