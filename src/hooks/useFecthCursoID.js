import React, { useState,useEffect } from 'react'
import { getCursoID } from '../helpers/getCursoID'

export const useFecthCursoID = (id) => {
    
    const [course, setCourse] = useState({
        dataCourseID:[],
    })
   
   useEffect(()=>{
    getCursoID(id).then(course=>{
        setCourse(
            {
            dataCourseID:course
           }
        )
    })
   },[])
   
    return course;

}
