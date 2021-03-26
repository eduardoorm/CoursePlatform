import React from 'react'

export const putCurso = async (form,id) => {
    const enviarCampos ={
        nom_curso:form.nombre,
        des_curso:form.descripcion,
        dura_curso:form.duracion,
        precio_curso:form.precio,
        id_categoria: form.id_categoria,
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
    const respuesta = await fetch(`http://localhost:3001/putCurso/${id}`,config)
    const res = await respuesta.json();
    (!res.ok) ? alert("Hubo un error") : alert("Se actualizo correctamente")
    }catch{
  console.log();
  }
}
