import React from 'react'

export const getCertificadoPordID = async(id) => {
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
    const url=`http://localhost:3001/getCertificadoPorID/${id}`;
    const response = await fetch(url,config);
    const certificates = await response.json();
    const certificate = certificates.map(item=>{
        return {
            id_certificate: item.id_certificate,  
            name_curso: item.name_curso,
            certificate: item.certificate,
            id_person: item.id_person
           }   
    }) 

    return certificate;
}
