import React from 'react'

export const putCertificado = async({nombre_curso},id_persona,id_certificado) => {
    const url =`http://localhost:3001/putCertificado/${id_certificado}`;
    const enviarCampos= {
       nombre_curso,
       id_persona,
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
    };
    const res = await fetch(url,config);
    if(res.ok){
        return {ok:true}
    }
}
