import React, { useEffect, useState } from 'react'
import { getEstudiante } from '../helpersAdmin/getEstudiante'

export const useFetchGetEstudiante = () => {
    const [student, setStudent] = useState({
        dataStudent:[],
    })

     useEffect(()=>{
        getEstudiante().then(item=>{
          setStudent({
              dataStudent:item,
          }
         )
       }) 
    },[]
    )
   
    return student;
}
