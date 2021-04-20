import React, { useState } from 'react'
import { postProfesor } from '../../helpersAdmin/postProfesor'
import LinearProgress from '@material-ui/core/LinearProgress';

export const DashAddProfesor = () => {
    const [form, setForm] = useState({})
    const [loading, setLoading]= useState(false);

    const handleSubmit =(e)=>{
       setForm({
           ...form,
          [e.target.name]:e.target.value,
       })
    }
    const AddProfesor =async(e)=>{
        e.preventDefault();
        setLoading(true)
        const response = await  postProfesor(form);
        if(response.ok){
          setLoading(false)
        }
    }
    return (
        <div className="Agregar_categoria_container">
            <form className="form_categoria">
                <label htmlFor="nombre" >Nombre Profesor</label>
                <input id="nombre" name="nombre" className="input_categoria" type="text" onChange={handleSubmit}/>
                <label htmlFor="apellidos" >Apellido Profesor</label>
                <input id="apellidos" name="apellidos" className="input_categoria" type="text" onChange={handleSubmit}/>
                {loading &&  <LinearProgress />} <br/>
                <button className="btn_agregar" type="submit" onClick={AddProfesor}>Agregar</button>
            </form>
            
        </div>
    )
    }