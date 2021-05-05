import React, { useState } from 'react'
import { useParams } from 'react-router'
import { postLeccion } from '../../helpersAdmin/postLeccion'
import { useFecthCursoID } from '../../hooks/useFecthCursoID'
import { useFetchgetSeccionPorCursoID } from '../../hooksAdmin.js/useFetchgetSeccionPorCursoID'
import LinearProgress from '@material-ui/core/LinearProgress';

export const DashAddLeccion = () => {
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

    const {dataSeccion:seccion}=useFetchgetSeccionPorCursoID(id);
     
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
            <p className="titulo_AddLeccion">Agregar Lección</p>
            <form>
                <label htmlFor="nom_video">Título</label>
                <input id="nom_video" name="nom_video" type="text" onChange={handleSubmit}/>

                <label htmlFor="dura_video">Duración</label>
                <input id="dura_video" name="dura_video" type="number" onChange={handleSubmit}/>

                <label htmlFor="des_video">Descripción </label>
                <input id="des_video" name="des_video" type="text" onChange={handleSubmit}/>
                <select name="id_modulo" id="selectModulo" onClick={handleSubmit}>
                    {seccion.map(el=><option key={el.id_modulo} name="id_modulo">{el.id_modulo} : {el.nombre} </option>)}
                </select>
                 <br/>
                 {loading &&  <LinearProgress />} 
                 <br/>
                <button type="submit" className="btn-default" id="btn_AddLeccion" onClick={AddLeccion}>Agregar</button>
                <button type="submit" className="btn-default" id="btn_AddVolver" onClick={AddVolver}>volver</button>
            </form>
        </div>
    )
}
