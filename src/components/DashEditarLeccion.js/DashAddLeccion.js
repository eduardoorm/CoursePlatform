import React, { useState } from 'react'
import { useParams } from 'react-router'
import { postLeccion } from '../../helpersAdmin/postLeccion'
import { useFecthCursoID } from '../../hooks/useFecthCursoID'
import { useFetchgetSeccionPorCursoID } from '../../hooksAdmin.js/useFetchgetSeccionPorCursoID'
import LinearProgress from '@material-ui/core/LinearProgress';

export const DashAddLeccion = () => {
    const [form, setForm] = useState({})
    const {id} = useParams();
    const {dataCursoID:course} =  useFecthCursoID(id);
    const [loading, setLoading]= useState(false);

    const handleSubmit =(e)=>{
       setForm({
           ...form,id_course:course[0]?.id,
          [e.target.name]:e.target.value,
       })
    }

    const {dataSeccion:section}=useFetchgetSeccionPorCursoID(id);
     
    const AddLeccion = async (e)=>{
        e.preventDefault();
        setLoading(true)
        const response= await postLeccion(form,id)
        if(response.ok) return setLoading(false)
    }

    const AddVolver =(e)=>{
        e.preventDefault();
        window.location.reload();
    }
    return (
        <div >
            <p className="titulo_addLesson">Add Lesson</p>
            <form>
                <label htmlFor="name_video">Title</label>
                <input id="name_video" name="name_video" type="text" onChange={handleSubmit}/>

                <label htmlFor="duration_video">Duration</label>
                <input id="duration_video" name="duration_video" type="number" onChange={handleSubmit}/>

                <label htmlFor="desctiption_video">Description</label>
                <input id="desctiption_video" name="desctiption_video" type="text" onChange={handleSubmit}/>
                <select name="id_module" id="selectModule" onClick={handleSubmit}>
                    {section.map(el=><option key={el.id_module} name="id_module">{el.id_module} : {el.name} </option>)}
                </select>
                 <br/>
                 {loading &&  <LinearProgress />} 
                 <br/>
                <button type="submit" className="btn-default" id="btn_addLesson" onClick={AddLeccion}>Add</button>
                <button type="submit" className="btn-default" id="btn_addBackTo" onClick={AddVolver}>Back to</button>
            </form>
        </div>
    )
}
