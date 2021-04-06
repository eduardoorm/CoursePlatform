import React from 'react'

export const putCertificado = async({nombre_curso},id_persona,id_certificado) => {
    const url =`http://localhost:3001/putCertificado/${id_certificado}`;
    const enviarCampos= {
       nombre_curso,
       id_persona,
    } 

    let config ={
       method:"PUT",
       headers:{
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       },
       body: JSON.stringify(enviarCampos)
    };
    const res = await fetch(url,config);
    if(res.ok){
        alert("Se actualizo el certificado")
    }
}
