import React, { useState } from 'react'
import { getCategoria } from '../../helpersAdmin/getCategoria'
import { postProfesor } from '../../helpersAdmin/postProfesor'
import {useFecthGetCategoria} from '../../hooksAdmin.js/useFecthGetCategoria'
export const DashAddProfesor = () => {
    const [form, setForm] = useState({})
    const handleSubmit =(e)=>{
       setForm({
           ...form,
          [e.target.name]:e.target.value,
       })
    }
    const AddProfesor =(e)=>{
       e.preventDefault();
        postProfesor(form)
    }
    return (
        <div className="Agregar_categoria_container">
            <form className="form_categoria">
                <label for="nombre" >Nombre Profesor</label>
                <input id="nombre" name="nombre" className="input_categoria" type="text" onChange={handleSubmit}/>
                <label for="apellidos" >Apellido Profesor</label>
                <input id="apellidos" name="apellidos" className="input_categoria" type="text" onChange={handleSubmit}/>
                <button className="btn_agregar" type="submit" onClick={AddProfesor}>Agregar</button>
            </form>
            
        </div>
    )
    }