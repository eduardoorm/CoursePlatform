import React from 'react'

export const getSubsByCursoID = async(id) => {
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
    const url=`http://localhost:3001/getSubsPorCurso/${id}`;
    const response = await fetch(url,config);
    const suscripciones = await response.json();
   
    const subs = suscripciones.map(item=>{
        return {
            email: item.email,  
            nombre: item.nombre,
            apellidos: item.apellidos,
            nombre_curso: item.nom_curso,
           }   
    }) 

    return subs;
}
