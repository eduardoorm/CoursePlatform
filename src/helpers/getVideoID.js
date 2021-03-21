import React from 'react'

export const getVideoID = async(id_video) => {
    const url = `http://localhost:3001/getVideoPorID/${id_video? id_video : 0}`;
    const respuesta = await fetch(url);
    const res = await respuesta.json();
    const video = res.map(item=>{
        return{
           id_video  :  item.id_video,
           nombre    :  item.nom_video,
           duracion  :  item.dura_video,
           id_modulo :  item.id_modulo,
           id_curso  :  item.id_curso,
           descripcion: item.des_video
        }
    })
    return video
}
