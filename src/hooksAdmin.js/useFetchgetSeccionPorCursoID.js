import React, { useEffect, useState } from 'react'
import { getSeccionPorCursoID } from '../helpersAdmin/getSeccionPorCursoID'

export const useFetchgetSeccionPorCursoID = (id) => {
    const [seccion, setSeccion] = useState({
        dataSeccion:[],
    })
   
   useEffect(()=>{
    getSeccionPorCursoID(id).then(item=>{
        setSeccion(
            {
           dataSeccion:item
           }
        )
    })
   },[])
   
    return seccion;
}
