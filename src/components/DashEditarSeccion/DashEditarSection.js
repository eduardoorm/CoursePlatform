import React, { useState } from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import { Formulario } from '../../elementos/Formularios';
import Input from '../Input';
import { useFetchGetSeccionPorID } from '../../hooksAdmin.js/useFetchGetSeccionPorID';
import { putSeccion } from '../../helpersAdmin/putSeccion';
import LinearProgress from '@material-ui/core/LinearProgress';

export const DashEditarSection = () => {
    let {id}= useParams();
    const [form, setform] = useState({});
    const history= useHistory()
    const [loading, setLoading]= useState(false);
    const handleChange =(e)=>{
      setform({
        ...form,
        [e.target.name]:e.target.value
      })
     }
     
    const {dataSeccion:seccion} = useFetchGetSeccionPorID(id)

     const editarSeccion =(e)=>{
      setLoading(true)
      e.preventDefault();
      const response =  putSeccion(form,id)
      if(response.ok) return setLoading(false)
      
     }
    
  return (
      <div>
        <button className="btn-Volver" onClick={()=>{history.goBack()}}>volver</button>
        <Formulario id="form">
                            <label htmlFor="nombre">Nombre</label>
                            <Input
                           placeholder={seccion[0]?.nombre }
                           id="nombre"
                           name="nombre"
                           type="text"
                           onChange={handleChange}
                           /> 
                           {loading &&  <LinearProgress />} <br/><br/>
           <button type="submit" className="btn-default" onClick={editarSeccion}>Actualizar</button>
        </Formulario>
      </div>
   )
}
