import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Formulario } from '../../elementos/Formularios';
import { putCurso } from '../../helpersAdmin/putCurso';
import { useFecthCurso } from '../../hooks/useFecthCurso';
import { useFecthCursoID } from '../../hooks/useFecthCursoID';
import { useFecthGetCategoria} from '../../hooksAdmin.js/useFecthGetCategoria';
import Input from '../Input';

export const DashhEditarCourse = () => {
    let {id}= useParams();
    const{dataCursoID:curso}= useFecthCursoID(id)
      const [form, setform] = useState({});
   
      const handleChange =(e)=>{
        setform({
          ...form,
          [e.target.name]:e.target.value
        })
       }
      console.log(form);
     const {dataCategoria:categoria}=useFecthGetCategoria();
    //    console.log(form);
       const editarStudent =(e)=>{
        e.preventDefault();
        putCurso(form,id); 
       }
      
    return (
        <div>
          <p>Actualizar Curso</p> <br/>
          <Link to="/admin/cursos"><button className="btn-Volver">volver</button></Link>  
          <Formulario id="form">
                            <label htmlFor="nombre">Título </label>
                             <Input
                             value={curso[0]?.nombre || "---" }
                             id="nombre"
                             name="nombre"
                             type="text"
                             onChange={handleChange}
                             /> 
                              <label htmlFor="descripcion">Descripción </label>
                              <Input
                             value={curso[0]?.descripcion || "----" }
                             id="descripcion"
                             name="descripcion"
                             type="text"
                             onChange={handleChange}
                             /> 
                            <div className="item_input_addCategoria">
                              <div>
                                <label htmlFor="duracion">Duración </label>
                                  <Input
                                value={curso[0]?.duracion|| "---" }
                                id="duracion"
                                name="duracion"
                                type="number"
                                onChange={handleChange}
                                className="input_addCategoria" id="duracion_input" 
                                /> 
                              </div>
                             <div>
                              <label htmlFor="precio">Precio </label>
                                <Input
                                value={curso[0]?.precio|| "---" }
                                id="precio"
                                name="precio"
                                type="number"
                                onChange={handleChange}
                                className="input_addCategoria" id="precio_input"
                                /> 
                             </div>

                              <div>
                                <label for="id_categoria">Categoría: </label>
                                  <select name="id_categoria" onClick={handleChange} id="addCategoria_select">    
                                    {categoria?.map((el,pos)=><option key={el.id} value={el.id} name={el.nombre} >{el.nombre} </option>)}
                                  </select>
                              </div>
                             
                           </div>
             <button type="submit" className="btn-default" onClick={editarStudent}>Actualizar</button>
          </Formulario>
        </div>
     )
}
