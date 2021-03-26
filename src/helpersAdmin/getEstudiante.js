import React from 'react'

export const getEstudiante = async() => {
    const url = "http://localhost:3001/getEstudiante";
    const res =await fetch(url);
    const estudiantes = await res.json();
    const estudiante = estudiantes.map(item=>{
       return { 
           id : item.id_estudiante,
           nombre: item.nombre,
           apellidos:item.apellidos,
           email:item.email,
           role:item.role,
           id_persona:item.id_persona,
       }
    })
    return estudiante
}
