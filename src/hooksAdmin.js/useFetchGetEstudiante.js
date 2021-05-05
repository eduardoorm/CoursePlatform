import React, { useEffect, useState } from 'react'
import { getEstudiante } from '../helpersAdmin/getEstudiante'

export const useFetchGetEstudiante = () => {
    const [estudiante, setEstudiante] = useState({
        dataEstudiante:[],
    })

     useEffect(()=>{
        getEstudiante().then(item=>{
          setEstudiante({
              dataEstudiante:item,
          }
         )
       }) 
    },[]
    )
   
    return estudiante;
}
