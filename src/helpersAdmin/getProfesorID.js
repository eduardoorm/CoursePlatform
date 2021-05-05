import React from 'react'

export const getPorfesorID = async(id) => {
    const url=`http://localhost:3001/getInstrucorID/${id}`;
    const response = await fetch(url);
    const profesores= await response.json();
    const profesor = profesores.map(item=>{
        return {
            id: item.id_instructor,  
            nombre: item.nombre,
            apellidos: item.apellidos
           }   
    }) 
    return profesor;
}
