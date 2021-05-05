import React, { useEffect, useState } from 'react'
import { getSeccion } from '../helpersAdmin/getSeccion'

export const useFecthGetSeccion = () => {
    const [secciones, setSeccion] = useState({
        dataSecciones:[],
    })
    
    useEffect(()=>{
        getSeccion().then(item=>{
          setSeccion({
              dataSecciones:item,
          }
         )
       }) 
    },[]
    )
    return secciones;
}
