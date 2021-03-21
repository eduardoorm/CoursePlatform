import React, { useEffect, useState } from 'react'
import { getVideosPorModulo } from '../helpers/getVideosPorModulo'

export const useFetchVideo = (id_modulo) => {
     const [video, setVideo] = useState({
         dataVideos:[]
     })
     
     useEffect(()=>{
         getVideosPorModulo(id_modulo).then(videos=>{
            setVideo({
                dataVideos:videos,
            })
         }        
         )
     },[])
    return video
}
