import React from 'react'

export const getSubsByCursoID = async(id) => {
    const url=`http://localhost:3001/getSubsPorCurso/${id}`;
    const response = await fetch(url);
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
