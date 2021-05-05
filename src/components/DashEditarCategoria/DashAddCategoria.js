import React, { useState } from 'react'
import { postCategoria } from '../../helpersAdmin/postCategoria'
import LinearProgress from '@material-ui/core/LinearProgress';

export const DashAddCategoria = () => {
    const [form, setForm] = useState({})
    const [loading, setLoading]= useState(false);
    const handleSubmit =(e)=>{
       setForm({
           ...form,
          [e.target.name]:e.target.value,
       })
    }
    const AddCategoria =async (e)=>{
       e.preventDefault();
       setLoading(true)
      const response = await postCategoria(form);
      if(response?.ok){
        setLoading(false)
      }
    }
    return (
        <div className="Agregar_categoria_container">
            <form className="form_categoria">
                <label htmlFor="categoria" >Nombre Categoria</label>
                <input id="categoria" name="nom_cate" className="input_categoria" type="text" onChange={handleSubmit}/>
                {loading &&  <LinearProgress />}
                <button className="btn_agregar" type="submit" onClick={AddCategoria}>Agregar</button>
            </form>
            
        </div>
    )
}
