import React from 'react'

export const getUltimosCursos = async () => {
    const url= `http://localhost:3001/ultimosCursos`
    const respuesta = await fetch(url);
    const res = await respuesta.json();
    const cursos= res.map(curso=>{
        return{
          nombre: curso.nom_curso,
          descripcion: curso.des_curso,
          duracion: curso.dura_curso,
          id: curso.id_curso,
          categoria:curso.nom_cate,
          lecciones:curso.lecciones
        }
    })
    return cursos;
}
