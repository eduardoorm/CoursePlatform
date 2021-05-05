import React from 'react'

export const getEstudianteID =async (id) => {
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
    const url=`http://localhost:3001/getEstudiantePorID/${id}`;
    const response = await fetch(url,config);
    const estudiantes = await response.json();
    const estudiante = estudiantes.map(student=>{
        return {
            id: student.id_estudiante,  
            nombre: student.nombre,
            apellido: student.apellidos,
            email: student.email,
            role: student.role,
            id_persona: student.id_persona
           }   
    }) 

    return estudiante;
}
