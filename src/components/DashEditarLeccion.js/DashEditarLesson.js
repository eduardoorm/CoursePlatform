import React, { useState } from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import { Formulario } from '../../elementos/Formularios';
import Input from '../Input';
import { useFetchVideoID } from '../../hooks/useFetchVideoID';
import { putVideo } from '../../helpersAdmin/putVideo';

export const DashEditarLesson = () => {
    let {id}= useParams();
    const [form, setform] = useState({});
    const history= useHistory()
     const {dataVideo:video} =  useFetchVideoID(id);
     console.log("videito",video);
    const handleChange =(e)=>{
      setform({
        ...form,
        [e.target.name]:e.target.value
      })
     }
     console.log(video);

     const editarSeccion =(e)=>{
      e.preventDefault();
       putVideo(form,id);
     }
    
    return (
        <div>
        <button className="btn-Volver" onClick={()=>{history.goBack()}}>volver</button>
        <Formulario id="form">
                            <label htmlFor="nombre">Nombre</label>
                            <Input
                           placeholder={video[0]?.nombre}
                           id="nombre"
                           name="nombre"
                           type="text"
                           onChange={handleChange}
                           /> 
                            <label htmlFor="nombre">Descripción</label>
                            <Input
                           placeholder={video[0]?.descripcion}
                           id="descripcion"
                           name="descripcion"
                           type="text"
                           onChange={handleChange}
                           /> 
                           <label htmlFor="nombre">Duración</label>
                            <Input
                           placeholder={video[0]?.duracion }
                           id="duracion"
                           name="duracion"
                           type="number"
                           onChange={handleChange}
                           /> 
           <button type="submit" className="btn-default" onClick={editarSeccion}>Actualizar</button>
        </Formulario>
      </div>
    )
}
