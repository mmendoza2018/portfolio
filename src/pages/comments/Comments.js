import React, { useEffect, useState } from 'react'
import getData from '../../utils/getData.js';
import db from '../../utils/firebaseConfig';
import addData from '../../utils/PostData.js';
import './comments.css';
import Card from './components/Card.js';
import scrollX from '../../utils/scrollX.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";


const Comments = ({openModal1}) => {
  const [data, setData] = useState([])
  useEffect(() => {
    showData()
    scrollX(`.container-comments`)
  }, [])
 const showData = async () => {
  setData(await getData(db))
 }
  return (
    <section className='container-general-comments' id='comments'>
    <h2>Recomendaciones</h2>
    <div className='container-comments'>
      {data.map((e,index)=> <Card key={index} comment={e.comentario} name={e.nombres} starsDb ={e.calificacion}/> )}
    </div>
    <button type='button' className='btn-comments' onClick={openModal1}>
    <FontAwesomeIcon icon={faCommentDots} color='white' size='lg'/>
    Comentar
    </button>
    </section>
  )
}

export default Comments
