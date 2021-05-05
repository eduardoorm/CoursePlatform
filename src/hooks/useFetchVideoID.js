import React, { useEffect, useState } from 'react'
import { getVideoID } from '../helpers/getVideoID'

export const useFetchVideoID = (id_video) => {
    const [video, setVideo] = useState({
        dataVideo:[]
    })

    useEffect(()=>{
         getVideoID(id_video).then(item=>{
             setVideo({
                 dataVideo:item
             })
         })
    },[id_video])

    return video;
}
