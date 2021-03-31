import React from 'react'

export const getCursos = async() => {
    const url= `http://localhost:3001/cursos`;
    const respuesta = await fetch(url);
    const res = await respuesta.json();
    const cursos = res.map(curso=>{
        return{
           id: curso.id_curso,  
           nombre: curso.nom_curso,
           descripcion: curso.des_curso,
           duracion: curso.dura_curso,
           precio: curso.precio_curso,
           fecha: curso.fecha_curso, 
           id_categoria: curso.id_categoria,
           categoria: curso.nom_cate,
           lecciones: curso.lecciones,
           ruta:curso.ruta_curso,
        }
    })
    return cursos;
}
