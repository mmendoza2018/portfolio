import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from '../../../data/descriptionModal.json';
import './bodyModal.css';
import 'boxicons'


const BodyModal = ({listSkills,idBody}) => {
  let img = require('../../../assets/img/'+data.data[idBody].imagen);
  return (
    <div className='container-body-modal'>
      <div className='item-body-modal'>
        <img src={img} className='img-body-modal' alt='img' />
      </div>
      <div className='item-body-modal'> 
      <h3>{data.data[idBody].titulo}</h3> 
      <ul className='list-functions'>
       {data.data[idBody].lista.map((e,index) => <li key={index}>🔹{e}</li> )}
      </ul>
      <div className='list-icon'>
      {listSkills[idBody].map((e,index)=> {
       return <div key={index} className='item-icon'>
      <span>{e.descripcion}</span>
      {e.boxIcon 
      ? <box-icon type="logo" size='sm' color='white' name={e.icon}></box-icon> 
      : <FontAwesomeIcon icon={e.icon} color={'white'} size='lg'/> }
      </div>
      })}
      </div>
      
      </div>
    </div>
  )
}

export default BodyModal
