import React, { useState } from 'react'
import { useParams } from 'react-router'
import { postLeccion } from '../../helpersAdmin/postLeccion'
import { useFetchgetSeccionPorCursoID } from '../../hooksAdmin.js/useFetchgetSeccionPorCursoID'

export const DashAddLeccion = () => {
    const [form, setForm] = useState({})
    const handleSubmit =(e)=>{
       setForm({
           ...form,
          [e.target.name]:e.target.value,
       })
    }
    
    const {id} = useParams();
    const {dataSeccion:seccion}=useFetchgetSeccionPorCursoID(id);
    console.log(seccion);
    console.log("formulario",form);
    const AddLeccion =(e)=>{
       e.preventDefault();
    //    window.location.reload();
     postLeccion(form,id)
    }

    const AddVolver =(e)=>{
        e.preventDefault();
        window.location.reload();
    }
    return (
        <div >
            <p className="titulo_AddLeccion">Agregar Lección</p>
            <form>
                <label for="nom_video">Título</label>
                <input id="nom_video" name="nom_video" type="text" onChange={handleSubmit}/>

                <label for="dura_video">Duración</label>
                <input id="dura_video" name="dura_video" type="number" onChange={handleSubmit}/>

                <label for="des_video">Descripción </label>
                <input id="des_video" name="des_video" type="text" onChange={handleSubmit}/>
                <select name="id_modulo" id="selectModulo" onClick={handleSubmit}><br/>
                    {seccion.map(el=><option name="id_modulo">{el.id_modulo} : {el.nombre} </option>)}
                </select>
                 <br/><br/>
                <button type="submit" className="btn-default" id="btn_AddLeccion" onClick={AddLeccion}>Agregar</button>
                <button type="submit" className="btn-default" id="btn_AddVolver" onClick={AddVolver}>volver</button>
            </form>
        </div>
    )
}
