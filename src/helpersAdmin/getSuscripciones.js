import React from 'react'

export const getSuscripciones = async () => {
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
    const url = "http://localhost:3001/getSuscripciones";
    const res =await fetch(url,config);
    const suscripciones = await res.json();
    const suscripcion = suscripciones.map(item=>{
       return { 
           nombre_persona: item.nombre,
       }
    })
    return suscripcion
}
