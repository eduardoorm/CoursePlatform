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
    //    postCurso(form,fd);

	//¿COMO AGREGA VIDEOS?
	
       fd.append("nom_curso",form.nom_curso);
       fd.append("des_curso",form.des_curso)
       fd.append("dura_curso",form.dura_curso)
       fd.append("precio_curso",form.precio_curso)
       fd.append("lecciones",form.lecciones)
       fd.append("calificacion",form.calificacion)
       fd.append("id_categoria",form.id_categoria)
       fd.append("id_profesor",form.id_profesor)
       fd.append("imagen",form.imagen)	

	   axios.post('http://localhost:3001/postCurso',fd)
	   .then(response=>{
		   console.log(response);
	   })
    }

    // const AddImgCurso =(e)=>{
    //   e.preventDefault();
    //   fd.append("imagenCurso",imagen)
    //   axios.post('http://localhost:3001/uploadImgCurso',fd)
    //   .then(response=>{
    //     console.log(response.data);
    //   })
    // }

    return (
        <div  >
            <form>
                <label for="nom_curso">Título </label>
                <input  id="nom_curso" name="nom_curso" type="text" className="input_addCategoria" onChange={handleChange}/>
                <label for="des_curso">Descripción</label>
                <input id="des_curso" name="des_curso" type="text" className="input_addCategoria"  onChange={handleChange}/>
                <div className="item_input_addCategoria">
                  <div>
                    <label for="dura_curso">Horas: </label>
                    <input id="dura_curso" name="dura_curso" type="number" className="input_addCategoria" id="duracion_input" 
                    onChange={handleChange}/>
                  </div> 
                   <div>
                     <label for="cate_curso">Precio: </label>
                     <input id="cate_cursoe" name="precio_curso" type="number" className="input_addCategoria" id="precio_input"
                      onChange={handleChange}/>
                    </div>
                   <div>
                    <label for="lecciones">Lecciones: </label>
                    <input id="lecciones" name="lecciones" type="number"  className="input_addCategoria" id="lecciones_input"  
                    onChange={handleChange}/>
                   </div>
                   <div>
                    <label for="calificacion">Numero Calificaciones: </label>
                    <input id="calificacion" name="calificacion" type="number"  className="input_addCategoria" id="lecciones_input"  
                    onChange={handleChange}/>
                   </div>
                   <div>
                      <label for="id_categoria">Categoría: </label>
                      <select name="id_categoria" onClick={handleChange} id="addCategoria_select" >    
                      {categoria?.map((el,pos)=><option key={el.id} value={el.id} name={el.nombre} >{el.nombre} </option>)}
                      </select>
                      
                    </div>
                </div>
                <div>
                      <label for="id_profesor">Profesor: </label>
                      <select name="id_profesor" onClick={handleChange} id="addProfesor_select" >    
                      {profesor?.map((el,pos)=><option key={el.id} value={el.id} name={el.nombre} >{el.nombre} {el.apellidos} </option>)}
                      </select>
                    </div>
               
                <div>
                  <br/>
                  {preview === null ? null : <img src={preview} 
                  class="img-thumbnail" alt="..." style={{width:"500px", height:"auto"}}/>}
                 
                  <br/><br/>
                    <label htmlFor="imagenCurso">Seleccione una imagen: </label>
                    <input id="imagenCurso" name="imagenCurso" type="file" onChange={handleImagen}/>
                </div>    
               
                <button type="submit" className="btn_agregar" onClick={AddCurso}>Agregar</button>
           </form>
           
       
            
               </div>
    )
}
