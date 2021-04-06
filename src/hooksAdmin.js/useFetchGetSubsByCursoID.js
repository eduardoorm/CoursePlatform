import React, { useEffect, useState } from 'react'
import { getSubsByCursoID } from '../helpersAdmin/getSubsByCursoId'
export const useFetchGetSubsByCursoID = (id) => {
    const [suscripciones, setSuscripciones] = useState({
        dataSuscripciones:[],
    })
     
   useEffect(()=>{
    getSubsByCursoID(id).then(item=>{
        setSuscripciones(
            {
            dataSuscripciones:item
           }
        )
    })
   },[])
   
    return suscripciones;
}
