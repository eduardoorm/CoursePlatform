import React, { useState } from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import { Formulario } from '../../elementos/Formularios';
import Input from '../Input';
import { useFetchGetCertificadoPorID } from '../../hooksAdmin.js/useFetchGetCertificadoPorID';
import {putCertificado} from '../../helpersAdmin/putCertificado'
import LinearProgress from '@material-ui/core/LinearProgress';

export const DashEditarCertificate = () => {
    
    let {id}= useParams();
    const [form, setform] = useState({});
    const history= useHistory()
    const [loading, setLoading]= useState(false);
    const {dataCertificado:certificado}= useFetchGetCertificadoPorID(id);
    const {id_persona}=certificado;
    const handleChange =(e)=>{
      setform({
        ...form,
        [e.target.name]:e.target.value
      })
     }
     
    const editarSeccion =async(e)=>{
       e.preventDefault();
       const {id_persona,nombre_archivo,nombre_curso}=form;
       const enviar ={id_persona,nombre_archivo,nombre_curso}
       setLoading(true)
       const response = await putCertificado(form,id_persona,id);;
       if(response.ok){
         setLoading(false)
      }   
     }

    return (
        <div>
        <button className="btn-Volver" onClick={()=>{history.push(`/admin/certificados`)}}>volver</button>
        <Formulario id="form">
                            <label htmlFor="nombre">Nombre del curso</label>
                            <Input
                           placeholder={certificado[0]?.nombre_curso|| "----" }
                           id="nombre"
                           name="nombre_curso"
                           type="text"
                           onChange={handleChange}
                           /> 
                            <label htmlFor="nombre">Certificado</label>
                            <Input
                           placeholder={certificado[0]?.nombre_archivo|| "----" }
                           id="descripcion"
                           name="descripcion"
                           type="text"
                           onChange={handleChange}
                           />
                 {loading &&  <LinearProgress />} <br/><br/>
           <button type="submit" className="btn-default" onClick={editarSeccion}>Actualizar</button>
        </Formulario>
      </div>
    )
}
