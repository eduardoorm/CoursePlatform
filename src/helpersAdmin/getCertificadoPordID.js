import React from 'react'

export const getCertificadoPordID = async(id) => {
    const url=`http://localhost:3001/getCertificadoPorID/${id}`;
    const response = await fetch(url);
    const certificados = await response.json();
    console.log("certidicafos",certificados);
    const certificado = certificados.map(item=>{
        return {
            id_certificado: item.id_certificado,  
            nombre_curso: item.nombre_curso,
            certificado: item.certificado,
            id_persona: item.id_persona
           }   
    }) 

    return certificado;
}
