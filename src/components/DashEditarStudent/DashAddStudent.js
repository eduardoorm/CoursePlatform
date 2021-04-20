import React, { useState } from 'react'
import { postEstudiante } from '../../helpersAdmin/postEstudiante'
import LinearProgress from '@material-ui/core/LinearProgress';

export const DashAddStudent = () => {
    const [form, setForm] = useState({})
    const [loading, setLoading]= useState(false);
    const handleSubmit =(e)=>{
       setForm({
           ...form,
          [e.target.name]:e.target.value,
       })
    }

    const AddStudent =async(e)=>{
       e.preventDefault();
       setLoading(true)
       const response = await   postEstudiante(form);;
       if(response?.ok){
         setLoading(false)
       }
    }
    return (
        <div >
            <p>Agregar Estudiante</p>
            <form>
                <label htmlFor="estudiante">Nombre </label>
                <input id="estudiante" name="nombre" type="text" onChange={handleSubmit}/>
                <label htmlFor="estudiante">Apellido</label>
                <input id="estudiante" name="apellidos" type="text" onChange={handleSubmit}/>
                <label htmlFor="estudiante">Email</label>
                <input id="estudiante" name="email" type="email" onChange={handleSubmit}/>
                <label htmlFor="estudiante">Contraseña</label>
                <input id="estudiante" name="password" type="text" onChange={handleSubmit}/>
                {loading &&  <LinearProgress />} <br/>
                <button type="submit" className="btn-default" onClick={AddStudent}>Agregar</button>
            </form>
        </div>
    )
}
