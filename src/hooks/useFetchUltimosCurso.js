import React, { useEffect,useState } from 'react'
import { getUltimosCursos } from '../helpers/getUltimosCursos'

export const useFetchUltimosCurso = () => {
    const [ultimosCursos, setultimosCursos] = useState({
        dataCursos:[],
    })

    //  useEffect(()=>{
    //     getUltimosCursos().then(curso=>{
    //          setultimosCursos({
    //              dataCursos:curso,
    //          })
    //     })
    //  },[])  

    return ultimosCursos
}
