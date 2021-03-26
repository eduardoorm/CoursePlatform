import React from 'react'

export const postSection = async(form,id) => {
    const enviarCampos={
        nom_modulo:form.nombre,
        id_curso:id,
    }
    const url =`http://localhost:3001/postSeccion`;
    let config ={
       method:"POST",
       headers:{
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       },
       body: JSON.stringify(enviarCampos)
    };
    const res = await fetch(url,config);
    if(res.ok){
        alert("Se agrego el Modulo")
    }
}
