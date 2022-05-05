import React from 'react'

export const getLecciones =async () => {
    const url = `http://localhost:3001/getLecciones`;
    const respuesta = await fetch(url);
    const res = await respuesta.json();
    const video = res.map(item=>{
        return{
           id_video  :  item.id_video,
           name    :  item.name_video,
           duration  :  item.duration_video,
           id_module :  item.id_module,
           id_course  :  item.id_course,
           description: item.description_video
        }
    })
    return video
}
