import React, { useEffect, useState } from 'react'
import { getEstudianteID } from '../helpersAdmin/getEstudianteID'

export const useFetchGetEstudianteID = (id) => {
    const [student, setStudent] = useState({
        dataStudent:[],
    })
   
   useEffect(()=>{
    getEstudianteID(id).then(item=>{
        setStudent(
            {
           dataStudent:item
           }
        )
    })
   },[])
   
    return student;

}
