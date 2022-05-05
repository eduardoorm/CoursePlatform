import React, { useEffect, useState } from 'react'
import { getSeccionPorCursoID } from '../helpersAdmin/getSeccionPorCursoID'

export const useFetchgetSeccionPorCursoID = (id) => {
    const [lesson, setLesson] = useState({
        dataLesson:[],
    })
   
   useEffect(()=>{
    getSeccionPorCursoID(id).then(item=>{
        setLesson(
            {
           dataLesson:item
           }
        )
    })
   },[])
   
    return lesson;
}
