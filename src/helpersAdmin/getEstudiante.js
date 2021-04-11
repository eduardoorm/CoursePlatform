import React from 'react'

export const getEstudiante = async() => {
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
    const url = "http://localhost:3001/getEstudiante";
    const res =await fetch(url,config);
    const estudiantes = await res.json();
    const estudiante = estudiantes.map(item=>{
       return { 
           id : item.id_estudiante,
           nombre: item.nombre,
           apellidos:item.apellidos,
           email:item.email,
           role:item.role,
           id_persona:item.id_persona,
       }
    })
    return estudiante
}
