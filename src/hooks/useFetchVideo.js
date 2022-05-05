import React, { useEffect, useState } from 'react'
import { getVideosPorModulo } from '../helpers/getVideosPorModulo'

export const useFetchVideo = (id_module) => {
     const [video, setVideo] = useState({
         dataVideos:[]
     })
     
     useEffect(()=>{
         getVideosPorModulo(id_module).then(videos=>{
            setVideo({
                dataVideos:videos,
            })
         }        
         )
     },[])
     
    return video
}
