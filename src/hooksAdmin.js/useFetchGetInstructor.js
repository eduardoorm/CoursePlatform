import React, { useEffect, useState } from 'react'
import { getInstructor } from '../helpersAdmin/getInstructor'

export const useFetchGetInstructor = () => {
    const [profesor, setProfesor] = useState({
        dataProfesor:[],
    })
    
    useEffect(()=>{
        getInstructor().then(item=>{
          setProfesor({
              dataProfesor:item,
          }
         )
       }) 
    },[]
    )
    return profesor;
}
