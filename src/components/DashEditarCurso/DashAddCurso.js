import React, { useState } from 'react'
import { getCategoria } from '../../helpersAdmin/getCategoria'
import { postCurso } from '../../helpersAdmin/postCurso'
import { useFecthGetCategoria} from '../../hooksAdmin.js/useFecthGetCategoria'

export const DashAddCurso = () => {
    const [form, setForm] = useState({})
    const handleSubmit =(e)=>{
       setForm({
           ...form,
          [e.target.name]:e.target.value,
       })
    }
    const {dataCategoria:categoria}=useFecthGetCategoria();
   console.log(form);
    const AddCurso =(e)=>{
       e.preventDefault();
       window.location.reload();
       postCurso(form)
    }
    return (
        <div  >
            <form >
                <label for="nom_curso">Título </label>
                <input id="nom_curso" name="nom_curso" type="text" className="input_addCategoria" onChange={handleSubmit}/>
                <label for="des_curso">Descripción</label>
                <input id="des_curso" name="des_curso" type="text" className="input_addCategoria"  onChange={handleSubmit}/>
                <div className="item_input_addCategoria">
                  <div>
                    <label for="dura_curso">Horas: </label>
                    <input id="dura_curso" name="dura_curso" type="number" className="input_addCategoria" id="duracion_input" 
                    onChange={handleSubmit}/>
                  </div> 
                   <div>
                     <label for="cate_curso">Precio: </label>
                     <input id="cate_cursoe" name="precio_curso" type="number" className="input_addCategoria" id="precio_input"
                      onChange={handleSubmit}/>
                    </div>
                   <div>
                    <label for="lecciones">Lecciones: </label>
                    <input id="lecciones" name="lecciones" type="number"  className="input_addCategoria" id="lecciones_input"  
                    onChange={handleSubmit}/>
                   </div>
              
                   <div>
                      <label for="id_categoria">Categoría: </label>
                      {/* <input id="cate_curso" name="id_categoria" type="text" onChange={handleSubmit}/> */}
                      <select name="id_categoria" onClick={handleSubmit} id="addCategoria_select" >    
                      {categoria?.map((el,pos)=><option key={el.id} value={el.id} name={el.nombre} >{el.nombre} </option>)}
                      </select>
                      
                    </div>
                </div>
                <button type="submit" className="btn_agregar" onClick={AddCurso}>Agregar</button>
            </form>
            
        </div>
    )
}
