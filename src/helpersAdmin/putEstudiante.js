import React from 'react'

export const putEstudiante = async (form,id) => {
    const enviarCampos ={
        id_persona:id,
        nombre:form.nombre,
        apellido:form.apellido,
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
   console.log(enviarCampos);
   try{    
    const respuesta = await fetch('http://localhost:3001/putUser',config)
    const res = await respuesta.json();
    console.log(res);
    if(res.ok){
      return {ok:true}
  }
    }catch{
  console.log();
  }
}
