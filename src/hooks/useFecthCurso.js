import React, { useState,useEffect } from 'react'
import { getCursos } from '../helpers/getCursos'

export const useFecthCurso = () => {
    const [cursos, setCursos] = useState({
        dataCurso:[],
    })
   useEffect(()=>{
    getCursos().then(curso=>{
        setCursos(
            {
                dataCurso:curso,
            }
        )
    })
   },[])
   
    return cursos;

}
