import React, { useEffect, useState } from 'react'
import { getEstudianteID } from '../helpersAdmin/getEstudianteID'

export const useFetchGetEstudianteID = (id) => {
    const [estudiante, setEstudiante] = useState({
        dataEstudiante:[],
    })
   
   useEffect(()=>{
    getEstudianteID(id).then(item=>{
        setEstudiante(
            {
           dataEstudiante:item
           }
        )
    })
   },[])
   
    return estudiante;

}
