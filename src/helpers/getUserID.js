import React from 'react'

export const getUserID = async(id) => {
    const url=`http://localhost:3001/getUserId/${id}`;
    const response = await fetch(url);
    const personaData = await response.json();
    const persona = personaData.map(student=>{
        return {
            nombre: student.nombre,
            apellido: student.apellidos,
            email: student.email,
            role: student.role,
            id_persona: student.id_persona
           }   
    }) 

    return persona;
}
