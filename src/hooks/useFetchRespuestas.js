import React, { useEffect, useState } from 'react'
import { getRespuestas } from '../helpers/getRespuestas'

export const useFetchRespuestas = (id,dispatchAnswer) => {
     const [response, setResponse] = useState(
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
    return response; 
}
