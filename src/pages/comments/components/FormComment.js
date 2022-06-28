import React, { useState } from 'react'
import Button from '../../../components/button/Button';
import addData from '../../../utils/PostData';
import db from '../../../utils/firebaseConfig';
import './formComment.css';

let defaultForm = { 
  comentario: '',
  nombre: '',
  startRadio: 5
}
const FormComment = ({activeAlert,closeModal}) => {
    let [camposForm, setCamposForm] = useState(defaultForm);
    const handleForm = (e) => {
        setCamposForm({
            ...camposForm,[e.target.name]:e.target.value
        })
    }
   const handleSubmit = async (e) => {
       e.preventDefault()
       if(!camposForm || !camposForm.nombre || !camposForm.comentario || !camposForm.startRadio) 
       return activeAlert('Advertencia!', 'Todos los campos son requeridos', 'warning', 3000)
       let object = {
          calificacion: camposForm.startRadio,
          comentario: camposForm.comentario,
          nombres: camposForm.nombre,
          estado: false
        }
        console.log('object', object)
      let resPost = await addData(db,object)
      if (resPost) {
        activeAlert('Perfecto!', 'Tu comentario pronto sera aprobado', 'success', 4000)
        setCamposForm(defaultForm)
        closeModal();
      }else {
        activeAlert('Error!', 'Intentelo nuevamente', 'error', 2000)
      }
       
   }
   const validateLength = (e) => {
    if (e.target.value.length >134) {
      activeAlert('Advertencia!', 'ingrese menos de 134 caracteres', 'warning', 3000)
      e.target.value = e.target.value.slice(0, -1);
      return;
    }
    
    console.log(e.target.value);
   }
  return (
    <div className='container-form-comment'>
    <form onSubmit={handleSubmit}>
      <label>Nombre Completo</label>
      <input type='text' className='' value={camposForm.nombre} name='nombre' onChange={handleForm}  placeholder=''/>
      <label>Comentario</label>
      <textarea rows='2' name='comentario' onInput={validateLength} value={camposForm.comentario} onChange={handleForm} >
      </textarea>
      <div className='container-starts'>
        <input type="radio" name="startRadio" defaultChecked value={"5"} onChange={handleForm} id="star-1"/>
        <label htmlFor='star-1' ></label>
        <input type="radio" name="startRadio" value={"4"} onChange={handleForm}  id="star-2"/>
        <label htmlFor="star-2" ></label>
        <input type="radio" name="startRadio" value={"3"} onChange={handleForm}  id="star-3"/>
        <label htmlFor="star-3" ></label>
        <input type="radio" name="startRadio" value={"2"} onChange={handleForm}  id="star-4"/>
        <label htmlFor="star-4" ></label>
        <input type="radio" name="startRadio" value={"1"} onChange={handleForm}  id="star-5"/>
        <label htmlFor="star-5" ></label>
    </div>
    <div className='btn-form-comments'>
      <Button description='Enviar' size='btn-sm' clickFunction={handleSubmit}/>
    </div>
    </form>
    </div>
  )
}

export default FormComment
