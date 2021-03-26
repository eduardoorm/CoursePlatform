import React, { useState } from 'react'
import { postEstudiante } from '../../helpersAdmin/postEstudiante'

export const DashAddStudent = () => {
    const [form, setForm] = useState({})
    const handleSubmit =(e)=>{
       setForm({
           ...form,
          [e.target.name]:e.target.value,
       })
    }
    console.log("formulario",form);
    const AddStudent =(e)=>{
       e.preventDefault();
       window.location.reload();
       postEstudiante(form);
    }
    return (
        <div >
            <p>Agregar Estudiante</p>
            <form>
                <label for="estudiante">Nombre </label>
                <input id="estudiante" name="nombre" type="text" onChange={handleSubmit}/>
                <label for="estudiante">Apellido</label>
                <input id="estudiante" name="apellidos" type="text" onChange={handleSubmit}/>
                <label for="estudiante">Email</label>
                <input id="estudiante" name="email" type="email" onChange={handleSubmit}/>
                <label for="estudiante">Contraseña</label>
                <input id="estudiante" name="password" type="text" onChange={handleSubmit}/>
                <button type="submit" className="btn-default" onClick={AddStudent}>Agregar</button>
            </form>
            
        </div>
    )
}
