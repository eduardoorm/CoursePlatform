import React from 'react'

export const getCertificados = async () => {
    if(!localStorage.getItem("token")) return alert ("registrate")
    const {token} = JSON.parse(localStorage.getItem("token"));
    let config ={
        method:"GET",
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
        },
    }
    const url = "http://localhost:3001/getCertificado";
    const respuesta =await fetch(url,config);
    const certificados = await respuesta.json();
    const certificado = certificados.map(item=>{
       return { 
           id_certificado : item.id_certificado,
           id_persona: item.id_persona,
           nombre_curso: item.nombre_curso,
           nombre_persona: item.nombre,
           email:item.email,
       }
    })
    return certificado
}
