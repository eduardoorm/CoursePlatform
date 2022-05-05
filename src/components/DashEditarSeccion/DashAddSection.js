import React, { useState } from 'react'
import { useParams } from 'react-router'
import { postSection } from '../../helpersAdmin/postSection'
import { useFecthCursoID } from '../../hooks/useFecthCursoID'
import LinearProgress from '@material-ui/core/LinearProgress';

export const DashAddSection = () => {
    const [form, setForm] = useState({})
    const {id} = useParams();
    const {dataCursoID:curso} =  useFecthCursoID(id);
    const [loading, setLoading]= useState(false);
    const handleSubmit =(e)=>{
       setForm({
           ...form,id_curso:curso[0]?.id,
          [e.target.name]:e.target.value,
       })
    }
   
    const AddSeccion =async(e)=>{
       e.preventDefault();
       setLoading(true)
       const response= await postSection(form,id);
       if(response.ok) return setLoading(false)
    }

    const AddVolver =(e)=>{
        e.preventDefault();
        window.location.reload();
    }
    return (
        <div >
            <p className="titulo__addSection" >Add Section</p>
            <form className="form_addSeccion">
                <label htmlFor="name_module">Title</label>
                <input id="name_module" name="name" type="text" onChange={handleSubmit}/>
                {loading &&  <LinearProgress />} <br/><br/>
                <button className="btn-default" id="btn__addSection" type="submit" onClick={AddSeccion}>Add</button>
                <button className="btn-default" id="btn_addBackTo" type="submit" onClick={AddVolver}>Back To</button>
            </form>
        </div>
    )
}
