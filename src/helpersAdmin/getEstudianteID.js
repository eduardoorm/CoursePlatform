import React from 'react'

export const getEstudianteID =async (id) => {
  
    const url=`http://localhost:3001/getEstudiantePorID/${id}`;
    const response = await fetch(url);
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
