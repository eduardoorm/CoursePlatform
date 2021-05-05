import React, { useEffect, useState } from 'react'
import { getRespuestas } from '../helpers/getRespuestas'

export const useFetchRespuestas = (id,dispatchAnswer) => {
     const [respuesta, setRespuesta] = useState(
         {
             dataRespuesta:[],
         })

         useEffect(()=>{
             getRespuestas(id).then(payload=>{
               dispatchAnswer({
                   type:"LOAD_ANSWERS",payload
               })
             })
       },[])
    return respuesta; 
}
