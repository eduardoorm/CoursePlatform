import React, { useState } from 'react'
import { postCurso } from '../../helpersAdmin/postCurso'
import { useFecthGetCategoria} from '../../hooksAdmin.js/useFecthGetCategoria'
import axios from 'axios'
import { useFetchGetInstructor } from '../../hooksAdmin.js/useFetchGetInstructor'
import { postImgCurso } from '../../helpersAdmin/postImgCurso'
export const DashAddCurso = () => {
    const {dataCategoria:categoria}=useFecthGetCategoria();
    const {dataProfesor:profesor} = useFetchGetInstructor();
    const fd = new FormData();
    const [preview, setPreview] = useState(null);
    const [imagen, setImagen] = useState({});
    const [clickAgregar, setClickAgregar] = useState(false)
    const [form, setForm] = useState({})
    const handleChange =(e)=>{  
        setForm({
           ...form,
          [e.target.name]:e.target.value,
       })
    }
    const handleImagen =(e)=>{
      setForm({
        ...form,
        imagen: e.target.files[0]
      })
      setPreview(URL.createObjectURL(e.target.files[0]));
    }

    const AddCurso =(e)=>{
       e.preventDefault();
       postCurso(form,fd);

    }

    return (
        <div  >
            <form>
                <label htmlFor="name_course">Title </label>
                <input  id="name_course" name="name_course" type="text" className="input_addCategory" onChange={handleChange}/>
                <label htmlFor="des_course">Description</label>
                <input id="des_course" name="des_course" type="text" className="input_addCategory"  onChange={handleChange}/>
                <div className="item__input__addCategory">
                  <div>
                    <label htmlFor="duration_course">Hours: </label>
                    <input id="duration_course" name="duration_course" type="number" className="input__AddCategory"
                    onChange={handleChange}/>
                  </div> 
                   <div>
                     <label htmlFor="category_course">Price: </label>
                     <input id="category_course" name="price_course" type="number" className="input__AddCategory" 
                      onChange={handleChange}/>
                    </div>
                   <div>
                    <label htmlFor="lessons">Lessons: </label>
                    <input id="lessons" name="lessons" type="number"  className="input__AddCategory" 
                    onChange={handleChange}/>
                   </div>
                   <div>
                    <label htmlFor="calification">Number Qualifications: </label>
                    <input id="calification" name="calification" type="number"  className="input__AddCategory"  
                    onChange={handleChange}/>
                   </div>
                   <div>
                      <label htmlFor="id_categoria">Category: </label>
                      <select name="id_categoria" onClick={handleChange} id="addCategory_select" >    
                      {categoria?.map((el,pos)=><option key={el.id} value={el.id} name={el.name} >{el.name} </option>)}
                      </select>
                      
                    </div>
                </div>
                <div>
                      <label htmlFor="id_Teacher">Teacher: </label>
                      <select name="id_Teacher" onClick={handleChange} id="addProfesor_select" >    
                      {profesor?.map((el,pos)=><option key={el.id} value={el.id} name={el.name} >{el.name} {el.lastname} </option>)}
                      </select>
                    </div>
               
                <div>
                  <br/>
                  {preview === null ? null : <img src={preview} 
                  className="img-thumbnail" alt="..." style={{width:"500px", height:"auto"}}/>}
                 
                  <br/><br/>
                    <label htmlFor="imagen_course">Select an image: </label>
                    <input id="imagen_course" name="imagen_course" type="file" onChange={handleImagen}/>
                </div>    
               
                <button type="submit" className="btn_add" onClick={AddCurso}>Add</button>
           </form>       
               </div>
    )
}
