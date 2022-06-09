import React from 'react'
import './alert.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle,faTimes,faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
const Alert = ({description, title, type, status}) => {
  let sizeIcon = (description !== null) ? 'xl' : 'lg';
  let showAlert = (status) ? 'show' : '';
  let detailIcon =null;
  if (type==='error') {
    detailIcon = {icon:faTimes,color:'red'}
  }else if (type === 'warning') {
    detailIcon = {icon:faExclamationTriangle,color:'yellow'}
  } else {
    detailIcon = {icon:faCheckCircle,color:'green'} 
  }
  return (
    <div className={`container-alert ${showAlert}`}>
      <div className='item-alert'>
      <p className='title-alert'>{title}</p>
      {(description !==null && <span className='description-alert'>{description}</span>)}
      </div>
      <div className='item-alert'>
        <FontAwesomeIcon icon={detailIcon.icon} color={detailIcon.color} size={sizeIcon}/>
      </div>
    </div>
  )
}

export default Alert
