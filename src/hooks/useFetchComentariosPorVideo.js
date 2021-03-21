import React, { useEffect, useState } from 'react'
import {getComentariosPorVideo} from '../helpers/getComentariosPorVideo'
export const useFetchComentariosPorVideo = (id) => {
       const [comentPorVideo, setComentPorVideo] = useState({
           dataComentPorVideo:[]
       });
    
       useEffect(()=>{
        getComentariosPorVideo(id)
        .then(comentarios=>{
            setComentPorVideo({
                dataComentPorVideo:comentarios
            })
        })
       },[])
   
       
    return comentPorVideo; 
}
