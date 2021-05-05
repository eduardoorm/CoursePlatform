import React from 'react'

export const getSeccion = async () => {
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
    const url = "http://localhost:3001/getSeccion";
    const res =await fetch(url,config);
    const secciones = await res.json();
    const seccion = secciones.map(item=>{
       return { 
           id : item.id_modulo,
           nombre: item.nom_modulo,
           id_curso:item.id_curso,
       }
    })
    return seccion
}
