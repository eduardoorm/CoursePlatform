import React, { useEffect, useState } from 'react'
import { getSeccionPorID } from '../helpersAdmin/getSeccionPorID'

export const useFetchGetSeccionPorID = (id) => {
    const [seccion, setSeccion] = useState({
        dataSeccion:[],
    })

   useEffect(()=>{
    getSeccionPorID(id).then(item=>{
        setSeccion(
            {
           dataSeccion:item
           }
        )
    })
   },[])
   
    return seccion;
}
