import React, { useState } from 'react'
import { postCertificado } from '../../helpersAdmin/postCertificado'
import { useFetchGetEstudiante } from '../../hooksAdmin.js/useFetchGetEstudiante'

export const DashAddCertificado = () => {
    const [form, setForm] = useState({})
    const handleSubmit =(e)=>{
       setForm({
           ...form,
          [e.target.name]:e.target.value,
       })
    }
    
   const {dataEstudiante:estudiante} =useFetchGetEstudiante()
    console.log(estudiante);
   console.log(form);
    const AddCertificado=(e)=>{
       e.preventDefault();
       return postCertificado(form)
    }
 
    return (
        <div >
        
            <form>
                <label for="nom_curso">Nombre del Curso</label>
                <input id="nom_curso" name="nombre_curso" type="text" onChange={handleSubmit}/>
                <label for="des_curso">Certificado</label>
                <input id="des_curso" name="nombre_archivo" type="text" onChange={handleSubmit}/>
                <label for="id_persona">Persona</label> <br/>
                <select name="id_persona" id="select_buscar_persona" onClick={handleSubmit}>    
                   {estudiante?.map((el,pos)=><option key={el.id} value={el.id_persona} name={el.nombre} >{el.nombre} {el.email}</option>)}
                 </select>
                  <br/> <br/>
                <button type="submit" className="btn-default" onClick={AddCertificado}>Agregar</button>
            </form>
        </div>
    )
}
