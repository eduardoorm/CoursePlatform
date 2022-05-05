import React, { useState } from 'react'
import { postCategoria } from '../../helpersAdmin/postCategoria'
import LinearProgress from '@material-ui/core/LinearProgress';

export const DashAddCategory = () => {
    const [form, setForm] = useState({})
    const [loading, setLoading]= useState(false);
    const handleSubmit =(e)=>{
       setForm({
           ...form,
          [e.target.name]:e.target.value,
       })
    }
    const AddCategory =async (e)=>{
       e.preventDefault();
       setLoading(true)
      const response = await postCategoria(form);
      if(response?.ok){
        setLoading(false)
      }
    }
    return (
        <div className="Agregar_categoria_container">
            <form className="form__category">
                <label htmlFor="category" >Name Category</label>
                <input id="category" name="name_cate" className="input__category" type="text" onChange={handleSubmit}/>
                {loading &&  <LinearProgress />}
                <button className="btn_add" type="submit" onClick={AddCategory}>Add</button>
            </form>
            
        </div>
    )
}
