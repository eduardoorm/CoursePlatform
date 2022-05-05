import React, { useState } from 'react'
import { postEstudiante } from '../../helpersAdmin/postEstudiante'
import LinearProgress from '@material-ui/core/LinearProgress';

export const DashAddStudent = () => {
    const [form, setForm] = useState({})
    const [loading, setLoading]= useState(false);
    const handleSubmit =(e)=>{
       setForm({
           ...form,
          [e.target.name]:e.target.value,
       })
    }

    const AddStudent =async(e)=>{
       e.preventDefault();
       setLoading(true)
       const response = await   postEstudiante(form);;
       if(response?.ok){
         setLoading(false)
       }
    }
    return (
        <div >
            <p>Add Student</p>
            <form>
                <label htmlFor="student">Name </label>
                <input id="student" name="name" type="text" onChange={handleSubmit}/>
                <label htmlFor="student">Lastname</label>
                <input id="student" name="lastname" type="text" onChange={handleSubmit}/>
                <label htmlFor="student">Email</label>
                <input id="student" name="email" type="email" onChange={handleSubmit}/>
                <label htmlFor="student">Contraseña</label>
                <input id="student" name="password" type="text" onChange={handleSubmit}/>
                {loading &&  <LinearProgress />} <br/>
                <button type="submit" className="btn__default" onClick={AddStudent}>Add</button>
            </form>
        </div>
    )
}
