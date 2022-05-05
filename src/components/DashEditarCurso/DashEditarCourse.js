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

      const {dataCategoria:category}=useFecthGetCategoria();
      const {dataProfesor:teacher} = useFetchGetInstructor();
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
          <p>Update Course</p> <br/>
          <Link to="/admin/cursos"><button className=".btn__backTo">back to</button></Link>  
          <Formulario id="form">
                            <label htmlFor="nombre">Title </label>
                             <Input
                             placeholder={curso[0]?.nombre || "---" }
                             id="name_course"
                             name="name_course"
                             type="text"
                             onChange={handleChange}
                             /> 
                              <label htmlFor="description">Description </label>
                              <Input
                             placeholder={curso[0]?.descripcion || "----" }
                             id="des_course"
                             name="des_course"
                             type="text"
                             onChange={handleChange}
                             /> 
                            <div className="item__input__addCategory">
                              <div>
                                <label htmlFor="duracion">Duration</label>
                                  <Input
                                placeholder={curso[0]?.duracion}
                                id="duration_Course"
                                name="duration_Course"
                                type="number"
                                onChange={handleChange}
                                className="item__input__addCategory" 
                                /> 
                              </div>
                              <div>
                              <label htmlFor="lessons">Lessons: </label>
                              <input id="lessons" name="lessons" type="number"  className="item__input__addCategory"  
                              onChange={handleChange}/>
                            </div>
                            <div>
                              <label htmlFor="calificacion">Number Qualifications: </label>
                              <input id="calificacion" name="calificacion" type="number"  className="item__input__addCategory" 
                              onChange={handleChange}/>
                            </div>
                             <div>
                              <label htmlFor="precio">Price</label>
                                <Input
                                placeholder={curso[0]?.precio}
                                id="price_course"
                                name="price_course"
                                type="number"
                                onChange={handleChange}
                                className="input_addCategoria" 
                                /> 
                             </div>

                              <div>
                                <label htmlFor="id_category">Category: </label>
                                  <select name="id_category" onClick={handleChange} id="addCategory_select">    
                                    {category?.map((el,pos)=><option key={el.id} value={el.id} name={el.name} >{el.name} </option>)}
                                  </select>
                              </div>     
                           </div>
                           <div>
                            <label htmlFor="teacher">Profesor: </label>
                            <select name="teacher" onClick={handleChange} id="addTeacher_select" >    
                            {teacher?.map((el,pos)=><option key={el.id} value={el.id} name={el.name} >{el.name} {el.lastname} </option>)}
                            </select>
                          </div>
                          <br/>
                          <div>
                          <img src={curso[0]?.image} 
                                className="img-thumbnail" alt="..." style={{width:"500px", height:"auto"}}/>
                          </div>
                         
                        
                           <div>
                                {preview === null ? null : <img src={preview} 
                                className="img-thumbnail" alt="..." style={{width:"500px", height:"auto"}}/>}
                              
                                <br/><br/>
                                  <label htmlFor="image_course">Select an image: </label>
                                  <input id="image_course" name="image_course" type="file" onChange={handleImagen}/>
                             </div>    
             <button type="submit" className="btn-default" onClick={editarCurso}>Update</button>
          </Formulario>
        </div>
     )
}
