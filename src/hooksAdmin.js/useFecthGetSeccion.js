import React, { useEffect, useState } from 'react'
import { getSeccion } from '../helpersAdmin/getSeccion'

export const useFecthGetSeccion = () => {
    const [lessons, setLessons] = useState({
        dataLessons:[],
    })
    
    useEffect(()=>{
        getSeccion().then(item=>{
          setLessons({
              dataLessons:item,
          }
         )
       }) 
    },[]
    )
    return lessons;
}
