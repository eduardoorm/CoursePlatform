import React from 'react'

export const getCertificadoPorPersonaID = async(id) => {
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
    const url=`http://localhost:3001/getCertificadoPorPersonaID/${id}`;
    const response = await fetch(url,config);
    const certificados = await response.json();
    
    const certificado = certificados?.map(item=>{
        return {
            id_certificado: item.id_certificado,  
            id_persona: item.id_persona,
            nombre_curso: item.nombre_curso,
           }   
    }) 
  return certificado;
  
}
