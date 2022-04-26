import React, { useEffect, useState } from 'react'
import getData from '../../utils/getData.js';
import db from '../../utils/firebaseConfig';
import addData from '../../utils/PostData.js';
import './comments.css';
import Card from './components/Card.js';
import scrollX from '../../utils/scrollX.js';

const Comments = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    showData()
    scrollX(`.container-comments`)
  }, [])
 const showData = async () => {
  setData(await getData(db))
 }
  return (
    <section className='container-general-comments'>
    <div className='container-comments'>
      {data.map((e,index)=> <Card key={index} comment={e.comentario} name={e.nombres} starsDb ={e.calificacion}/> )}
    </div>
    <button type='button' onClick={addData}>Agregar</button>
    </section>
  )
}

export default Comments
