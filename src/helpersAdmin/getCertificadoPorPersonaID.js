import React from 'react'

export const getCertificadoPorPersonaID = async(id) => {
   
    const url=`http://localhost:3001/getCertificadoPorPersonaID/${id}`;
    const response = await fetch(url);
    const certificados = await response.json();
    console.log(certificados);
    const certificado = certificados?.map(item=>{
        return {
            id_certificado: item.id_certificado,  
            id_persona: item.id_persona,
            nombre_curso: item.nombre_curso,
           }   
    }) 
  return certificado;
  
}
