import React from 'react'
import {convertToUrl} from '../functions/ConvertToUrl'

export const putVideo = async(form,id) => {
    const enviarCampos ={
        nom_video:form.nombre,
        dura_video:form.duracion,
        des_video: form.descripcion,
        ruta_video:convertToUrl(form.nombre),
    }

    if(!localStorage.getItem("token")) return alert ("registrate")
    const {token} = JSON.parse(localStorage.getItem("token"));
     let config ={
        method:"PUT",
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
        },
        body: JSON.stringify(enviarCampos)
     }
   
   try{    
    const respuesta = await fetch(`http://localhost:3001/putLeccion/${id}`,config)
    const res = await respuesta.json();
    if(res.ok) return {
        ok:true
    }
    }catch{
    console.log();
 }
}
