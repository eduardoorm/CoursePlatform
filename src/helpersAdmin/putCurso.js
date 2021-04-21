import React from 'react'
import {convertToUrl} from '../functions/ConvertToUrl'

export const putCurso = async (form,id) => {
  
    const enviarCampos ={
        nom_curso:form.nom_curso,
        des_curso:form.des_curso,
        dura_curso:form.dura_curso,
        precio_curso:form.precio_curso,
        id_categoria: form.id_categoria,
        ruta_curso:convertToUrl(form.nom_curso),
        instructor: form.instructor,
        lecciones: form.lecciones,
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
          const respuesta = await fetch(`http://localhost:3001/putCurso/${id}`,config)
          const res = await respuesta.json();
          if(res.ok){
            return {ok:true}
          }
        }catch{
        console.log();
      }
}
