import React, { useState } from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import { Formulario } from '../../elementos/Formularios';
import Input from '../Input';
import { useFetchGetCertificadoPorID } from '../../hooksAdmin.js/useFetchGetCertificadoPorID';
import { useFecthGetProfesorID } from '../../hooksAdmin.js/useFecthGetProfesorID';
import { putProfesor } from '../../helpersAdmin/putProfesor';
import LinearProgress from '@material-ui/core/LinearProgress';
export const DashEditarTeacher = () => {
    
    let {id}= useParams();
    const [form, setform] = useState({});
    const history= useHistory()
    const [loading, setLoading]= useState(false);
    const {dataProfesor:profesor}=useFecthGetProfesorID(id);
    
    const handleChange =(e)=>{
      setform({
        ...form,
        [e.target.name]:e.target.value
      })
     }

    const editarProfesor =async(e)=>{
      e.preventDefault();
      setLoading(true)
      const response = await putProfesor(form,id);
      if(response.ok){
        setLoading(false)
      }
     }
     
    return (
        <div>
        <button className="btn-Volver" onClick={()=>{history.goBack()}}>volver</button>
        <Formulario id="form">
                            <label htmlFor="nombre">Nombres</label>
                            <Input
                           placeholder={profesor[0]?.nombre|| "----" }
                           id="nombre"
                           name="nombre"
                           type="text"
                           onChange={handleChange}
                           /> 
                            <label htmlFor="apellidos">Apellidos</label>
                            <Input
                           placeholder={profesor[0]?.apellidos|| "----" }
                           id="apellidos"
                           name="apellidos"
                           type="text"
                           onChange={handleChange}
                           />
                           {loading &&  <LinearProgress />} <br/><br/>
           <button type="submit" className="btn-default" onClick={editarProfesor}>Actualizar</button>
        </Formulario>
      </div>
    )
}
