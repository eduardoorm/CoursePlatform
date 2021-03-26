import React, { useState } from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import { Formulario } from '../../elementos/Formularios';
import Input from '../Input';
import { useFetchGetCertificadoPorID } from '../../hooksAdmin.js/useFetchGetCertificadoPorID';
export const DashEditarCertificate = () => {
    
    let {id}= useParams();
    const [form, setform] = useState({});
    const history= useHistory()
   
    const {dataCertificado:certificado}= useFetchGetCertificadoPorID(id)
    
    const handleChange =(e)=>{
      setform({
        ...form,
        [e.target.name]:e.target.value
      })
     }
     console.log(certificado[0]?.nombre_archivo);

    const editarSeccion =(e)=>{
      e.preventDefault();
    //   putVideo(form,id);
     }
    return (
        <div>
        <button className="btn-Volver" onClick={()=>{history.goBack()}}>volver</button>
        <Formulario id="form">
                            <label htmlFor="nombre">Nombre del curso</label>
                            <Input
                           value={certificado[0]?.nombre_curso|| "----" }
                           id="nombre"
                           name="nombre"
                           type="text"
                           onChange={handleChange}
                           /> 
                            <label htmlFor="nombre">Certificado</label>
                            <Input
                           value={certificado[0]?.nombre_archivo|| "----" }
                           id="descripcion"
                           name="descripcion"
                           type="text"
                           onChange={handleChange}
                           />
           <button type="submit" className="btn-default" onClick={editarSeccion}>Actualizar</button>
        </Formulario>
      </div>
    )
}
