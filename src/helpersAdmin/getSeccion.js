import React from 'react'

export const getSeccion = async () => {
    const url = "http://localhost:3001/getSeccion";
    const res =await fetch(url);
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
