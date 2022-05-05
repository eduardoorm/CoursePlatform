import React from 'react'

export const getVideoID = async(id_video) => {
    const url = `http://localhost:3001/getVideoPorID/${id_video? id_video : 0}`;
    const response = await fetch(url);
    const res = await response.json();
    const video = res.map(item=>{
        return{
           id_video  :  item.id_video,
           name   :  item.name_video,
           duration  :  item.duration_video,
           id_module :  item.id_module,
           id_course  :  item.id_course,
           description: item.des_video,
           url_video: item.url_video,
        }
    })
    return video
}
