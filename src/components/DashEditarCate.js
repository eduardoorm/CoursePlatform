import React, { useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import { useFetchGetCategoriaID } from '../hooksAdmin.js/useFetchGetCategoriaID';
import { Formulario } from '../elementos/Formularios';
import { putCategoria } from '../helpersAdmin/putCategoria';
import Input from './Input';

export const DashEditarCate= () => {
   let {id}= useParams();
   const {dataCategoria:categoria} = useFetchGetCategoriaID(id);
   const [form, setform] = useState({});

   const handleChange =(e)=>{
    setform({
      ...form,
      [e.target.name]:e.target.value
    })
   }

   console.log(form);

   const editarCategoria =(e)=>{
    e.preventDefault();
    putCategoria(form,id);
   }
    return (
       <div>
        <p>Actualizar Categoría</p><br/>
         <Link to="/admin/categorias"><button className="btn-Volver">volver</button></Link>  
         <Formulario id="form">
                            <Input
                            id="categoria"
                            placeholder={categoria[0]?.nombre||"cargando..."}
                            name="nombre"
                            type="text"
                            onChange={handleChange}
                            /> 
            <button type="submit" className="btn-default" onClick={editarCategoria}>Actualizar</button>
         </Formulario>
       </div>
    )
}
