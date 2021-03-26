import React from 'react'

export const getSeccionPorID = async (id) => {
   
    const url=`http://localhost:3001/getSeccionPorID/${id}`;
    const response = await fetch(url);
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
