import React, { useState } from 'react'
import { getCategoria } from '../helpersAdmin/getCategoria'
import { postCategoria } from '../helpersAdmin/postCategoria'
import {useFecthGetCategoria} from '../hooksAdmin.js/useFecthGetCategoria'
export const DashAddCategoria = () => {
    const [form, setForm] = useState({})
    const handleSubmit =(e)=>{
       setForm({
           ...form,
          [e.target.name]:e.target.value,
       })
    }
    const AddCategoria =(e)=>{
       e.preventDefault();
       postCategoria(form);
    }
    return (
        <div className="Agregar_categoria_container">
            <form className="form_categoria">
                <label for="categoria" >Nombre Categoria</label>
                <input id="categoria" name="nom_cate" className="input_categoria" type="text" onChange={handleSubmit}/>
                <button className="btn_agregar" type="submit" onClick={AddCategoria}>Agregar</button>
            </form>
            
        </div>
    )
}
