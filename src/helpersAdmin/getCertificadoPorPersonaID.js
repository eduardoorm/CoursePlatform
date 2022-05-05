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
    const certificates = await response.json();
    
    const certificate = certificates?.map(item=>{
        return {
            id_certificate: item.id_certificate,  
            id_person: item.id_person,
            name_course: item.name_course,
           }   
    }) 
  return certificate;
  
}
