import React, { useEffect, useState } from 'react'
import { getSeccionPorID } from '../helpersAdmin/getSeccionPorID'

export const useFetchGetSeccionPorID = (id) => {
    const [lesson, setLesson] = useState({
        dataLesson:[],
    })

   useEffect(()=>{
    getSeccionPorID(id).then(item=>{
        setLesson(
            {
           dataLesson:item
           }
        )
    })
   },[])
   
    return lesson;
}
