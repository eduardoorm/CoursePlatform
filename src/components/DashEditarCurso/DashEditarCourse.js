import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Formulario } from '../../elementos/Formularios';
import { putCurso } from '../../helpersAdmin/putCurso';
import { useFecthCursoID } from '../../hooks/useFecthCursoID';
import { useFecthGetCategoria} from '../../hooksAdmin.js/useFecthGetCategoria';
import Input from '../Input';
import axios from 'axios'
import { useFetchGetInstructor } from '../../hooksAdmin.js/useFetchGetInstructor';
export const DashhEditarCourse = () => {
      let {id}= useParams();
      const{dataCursoID:curso}= useFecthCursoID(id)
      const [form, setForm] = useState({});
      const [preview, setPreview] = useState(null);

      console.log(form);
      const {dataCategoria:categoria}=useFecthGetCategoria();
      const {dataProfesor:profesor} = useFetchGetInstructor();
      const handleChange =(e)=>{
        setForm({
          ...form,
          [e.target.name]:e.target.value
        })
        
       }

       const editarCurso =(e)=>{
        e.preventDefault();
        putCurso(form,id)
       }

       const handleImagen =(e)=>{
        setForm({
          ...form,
          imagen: e.target.files[0]
        })
        setPreview(URL.createObjectURL(e.target.files[0]));
      }
      
    return (
        <div>
          <p>Actualizar Curso</p> <br/>
          <Link to="/admin/cursos"><button className="btn-Volver">volver</button></Link>  
          <Formulario id="form">
                            <label htmlFor="nombre">Título </label>
                             <Input
                             placeholder={curso[0]?.nombre || "---" }
                             id="nom_curso"
                             name="nom_curso"
                             type="text"
                             onChange={handleChange}
                             /> 
                              <label htmlFor="descripcion">Descripción </label>
                              <Input
                             placeholder={curso[0]?.descripcion || "----" }
                             id="des_curso"
                             name="des_curso"
                             type="text"
                             onChange={handleChange}
                             /> 
                            <div className="item_input_addCategoria">
                              <div>
                                <label htmlFor="duracion">Duración </label>
                                  <Input
                                placeholder={curso[0]?.duracion}
                                id="dura_curso"
                                name="dura_curso"
                                type="number"
                                onChange={handleChange}
                                className="input_addCategoria" id="duracion_input" 
                                /> 
                              </div>
                              <div>
                              <label htmlFor="lecciones">Lecciones: </label>
                              <input id="lecciones" name="lecciones" type="number"  className="input_addCategoria" id="lecciones_input"  
                              onChange={handleChange}/>
                            </div>
                            <div>
                              <label htmlFor="calificacion">Numero Calificaciones: </label>
                              <input id="calificacion" name="calificacion" type="number"  className="input_addCategoria" id="lecciones_input"  
                              onChange={handleChange}/>
                            </div>
                             <div>
                              <label htmlFor="precio">Precio </label>
                                <Input
                                placeholder={curso[0]?.precio}
                                id="precio_curso"
                                name="precio_curso"
                                type="number"
                                onChange={handleChange}
                                className="input_addCategoria" id="precio_input"
                                /> 
                             </div>

                              <div>
                                <label htmlFor="id_categoria">Categoría: </label>
                                  <select name="id_categoria" onClick={handleChange} id="addCategoria_select">    
                                    {categoria?.map((el,pos)=><option key={el.id} value={el.id} name={el.nombre} >{el.nombre} </option>)}
                                  </select>
                              </div>     
                           </div>
                           <div>
                            <label htmlFor="instructor">Profesor: </label>
                            <select name="instructor" onClick={handleChange} id="addProfesor_select" >    
                            {profesor?.map((el,pos)=><option key={el.id} value={el.id} name={el.nombre} >{el.nombre} {el.apellidos} </option>)}
                            </select>
                          </div>
                          <br/>
                          <div>
                          <img src={curso[0]?.imagen} 
                                className="img-thumbnail" alt="..." style={{width:"500px", height:"auto"}}/>
                          </div>
                         
                        
                           <div>
                                {preview === null ? null : <img src={preview} 
                                className="img-thumbnail" alt="..." style={{width:"500px", height:"auto"}}/>}
                              
                                <br/><br/>
                                  <label htmlFor="imagenCurso">Seleccione una imagen: </label>
                                  <input id="imagenCurso" name="imagenCurso" type="file" onChange={handleImagen}/>
                             </div>    
             <button type="submit" className="btn-default" onClick={editarCurso}>Actualizar</button>
          </Formulario>
        </div>
     )
}
