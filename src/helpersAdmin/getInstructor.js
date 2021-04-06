import React from 'react'

export const getInstructor = async () => {
    const url = "http://localhost:3001/getInstructor";
    const respuesta =await fetch(url);
    const instructores = await respuesta.json();
    const instructor = instructores.map(item=>{
       return { 
           id : item.id_instructor,
          nombre: item.nombre,
          apellidos:item.apellidos,
       }
    })
    return instructor
}
