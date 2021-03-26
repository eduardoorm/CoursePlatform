import React, { useState } from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import { Formulario } from '../../elementos/Formularios';
import Input from '../Input';
import { useFetchGetSeccionPorID } from '../../hooksAdmin.js/useFetchGetSeccionPorID';
import { putSeccion } from '../../helpersAdmin/putSeccion';

export const DashEditarSection = () => {
    let {id}= useParams();
    const [form, setform] = useState({});
    const history= useHistory()

    const handleChange =(e)=>{
      setform({
        ...form,
        [e.target.name]:e.target.value
      })
     }
     
    const {dataSeccion:seccion} = useFetchGetSeccionPorID(id)

     const editarSeccion =(e)=>{
      e.preventDefault();
      putSeccion(form,id)
     }
    
  return (
      <div>
        <button className="btn-Volver" onClick={()=>{history.goBack()}}>volver</button>
        <Formulario id="form">
                            <label htmlFor="nombre">Nombre</label>
                            <Input
                           value={seccion[0]?.nombre|| "----" }
                           id="nombre"
                           name="nombre"
                           type="text"
                           onChange={handleChange}
                           /> 
           <button type="submit" className="btn-default" onClick={editarSeccion}>Actualizar</button>
        </Formulario>
      </div>
   )
}
