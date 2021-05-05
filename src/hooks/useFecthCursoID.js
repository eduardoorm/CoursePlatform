import React, { useState,useEffect } from 'react'
import { getCursoID } from '../helpers/getCursoID'

export const useFecthCursoID = (id) => {
    
    const [curso, setCurso] = useState({
        dataCursoID:[],
    })
   
   useEffect(()=>{
    getCursoID(id).then(curso=>{
        setCurso(
            {
            dataCursoID:curso
           }
        )
    })
   },[])
   
    return curso;

}
