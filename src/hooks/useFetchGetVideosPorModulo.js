import React, { useEffect, useState } from 'react'
import { getVideosPorModulo } from '../helpers/getVideosPorModulo'

export const useFetchGetVideosPorModulo = (id) => {
    const [videos, setVideos] = useState({
        dataVideos:[],
    })
    
    useEffect(()=>{
       getVideosPorModulo(id).then(videos=>{
           setVideos({
               dataVideos:videos,
           })
       })
    },[])

    return videos; //{data:[] , loading:true}
}
