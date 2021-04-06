import React, { useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import { useFetchGetEstudianteID } from '../../hooksAdmin.js/useFetchGetEstudianteID';
import { Formulario } from '../../elementos/Formularios';
import Input from '../Input';
import { putEstudiante } from '../../helpersAdmin/putEstudiante';
export const DashEditarStudent = () => {
      let {id}= useParams();
      const{dataEstudiante:estudiante}  = useFetchGetEstudianteID(id);
      const id_persona = estudiante[0]?.id_persona;
      const [form, setform] = useState({});
   
      const handleChange =(e)=>{
        setform({
          ...form,
          [e.target.name]:e.target.value
        })
       }
       console.log(form);
       const editarStudent =(e)=>{
        e.preventDefault();
        putEstudiante(form,id_persona);
       }
    return (
        <div>
          <p>Actualizar Estudiante</p><br/>
          
          <Link to="/admin/estudiantes"><button className="btn-Volver">volver</button></Link>  
          <Formulario id="form">
                            <label htmlFor="nombre">Nombre </label>
                             <Input
                             placeholder={estudiante[0]?.nombre || "---" }
                             id="nombre"
                             name="nombre"
                             type="text"
                             onChange={handleChange}
                             /> 
                              <label htmlFor="apellido">Apellido</label>
                              <Input
                             placeholder={estudiante[0]?.apellido || "----" }
                             id="apellido"
                             name="apellido"
                             type="text"
                             onChange={handleChange}
                             /> 
                             <label htmlFor="email">Email</label>
                              <Input
                             placeholder={estudiante[0]?.email|| "---" }
                             id="email"
                             name="email"
                             type="email"
                             onChange={handleChange}
                             disabled={true}
                             /> 
                             <label htmlFor="email">Nueva Contraseña</label>
                             <Input
                             id="password"
                             name="password"
                             type="email"
                             onChange={handleChange}
                             /> 
             <button type="submit" onClick={editarStudent} className="btn-default">Actualizar</button>
          </Formulario>
        </div>
     )
}
