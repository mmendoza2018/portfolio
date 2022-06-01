import React from 'react'
import Button from '../../../components/button/Button';
import './formComment.css';

const FormComment = () => {
  return (
    <div className='container-form-comment'>
      <label>Nombre Completo</label>
      <input type='text' className='' placeholder=''/>
      <label>Comentario</label>
      <textarea rows='2'>
      </textarea>
      <div className='container-starts'>
        <input type="radio" name="start-radio"  id="star-1"/>
        <label htmlFor='star-1' ></label>
        <input type="radio" name="start-radio"  id="star-2"/>
        <label htmlFor="star-2" ></label>
        <input type="radio" name="start-radio"  id="star-3"/>
        <label htmlFor="star-3" ></label>
        <input type="radio" name="start-radio"  id="star-4"/>
        <label htmlFor="star-4" ></label>
        <input type="radio" name="start-radio"  id="star-5"/>
        <label htmlFor="star-5" ></label>
    </div>
    <div className='btn-form-comments'>
      <Button description='Enviar' size='btn-sm'/>
    </div>
    </div>
  )
}

export default FormComment
