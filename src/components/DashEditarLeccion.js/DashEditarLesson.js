import React, { useState } from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import { Formulario } from '../../elementos/Formularios';
import Input from '../Input';
import { useFetchVideoID } from '../../hooks/useFetchVideoID';
import { putVideo } from '../../helpersAdmin/putVideo';
import LinearProgress from '@material-ui/core/LinearProgress';

export const DashEditarLesson = () => {
    let {id}= useParams();
    const [form, setform] = useState({});
    const history= useHistory()
    const {dataVideo:video} =  useFetchVideoID(id);
    const [loading, setLoading]= useState(false);

    const handleChange =(e)=>{
      setform({
        ...form,
        [e.target.name]:e.target.value
      })
     }
     
     const editarSeccion = async(e)=>{
      e.preventDefault();
      setLoading(true)
      const response = await putVideo(form,id);
      if(response.ok) return setLoading(false)
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
                           <br/>
                           {loading &&  <LinearProgress />} 
                           <br/>
           <button type="submit" className="btn-default" onClick={editarSeccion}>Actualizar</button>
        </Formulario>
      </div>
    )
}
