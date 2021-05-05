import React from 'react'

export const getSeccionPorCursoID = async(id) => {
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
    const url=`http://localhost:3001/getSeccionPorCursoID/${id}`;
    const response = await fetch(url,config);
    const secciones = await response.json();
    const seccion = secciones.map(item=>{
        return {
            id_modulo: item.id_modulo,  
            nombre: item.nom_modulo,
            id_curso: item.id_curso,
           }   
    }) 

    return seccion;
}
