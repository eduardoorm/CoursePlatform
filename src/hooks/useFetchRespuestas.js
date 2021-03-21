import React, { useEffect, useState } from 'react'
import { getRespuestas } from '../helpers/getRespuestas'

export const useFetchRespuestas = (id) => {
     const [respuesta, setRespuesta] = useState(
         {
             dataRespuesta:[],
         })

         useEffect(()=>{
             getRespuestas(id).then(respuesta=>{
                setRespuesta({
                    dataRespuesta:respuesta,
                }
              )
           })
       },[])

    return respuesta; 
}
