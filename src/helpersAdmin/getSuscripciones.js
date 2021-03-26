import React from 'react'

export const getSuscripciones = async () => {
    const url = "http://localhost:3001/getSuscripciones";
    const res =await fetch(url);
    const suscripciones = await res.json();
    const suscripcion = suscripciones.map(item=>{
       return { 
           nombre_persona: item.nombre,
       }
    })
    return suscripcion
}
