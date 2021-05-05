import React, { useEffect, useState } from 'react'
import { getVideosPorCurso } from '../helpers/getVideosPorCurso'
export const useFetchGetVideosPorCurso = (id) => {
    const [videosCurso, setVideos] = useState({
        dataVideosCurso:[],
    })
    
    useEffect(()=>{
       getVideosPorCurso(id).then(videos=>{
           setVideos({
               dataVideosCurso:videos,
           })
       })
    },[])

    return videosCurso; //{data:[] , loading:true}
}
