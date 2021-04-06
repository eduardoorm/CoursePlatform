import React from 'react'

export const getCursoID = async (id) => {
    
    const url=`http://localhost:3001/getCursoID/${id}`;
    const response = await fetch(url);
    const cursos = await response.json();
  
    const curso = cursos.map(curso=>{
        return {
            id: curso.id_curso,  
            nombre: curso.nom_curso,
            descripcion: curso.des_curso,
            duracion: curso.dura_curso,
            precio: curso.precio_curso,
            fecha: curso.fecha_curso, 
            id_categoria: curso.id_categoria,
            ruta_curso: curso.ruta_curso,
            imagen: curso.imagen,
            instructor: curso.instrucor,
            
           }   
    }) 
    return curso;
}
