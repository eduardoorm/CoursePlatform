import React, { useEffect, useState } from 'react'
import { getInstructor } from '../helpersAdmin/getInstructor'

export const useFetchGetInstructor = () => {
    const [teacher, setTeacher] = useState({
        dataTeacher:[],
    })
    
    useEffect(()=>{
        getInstructor().then(item=>{
            setTeacher({
              dataTeacher:item,
          }
         )
       }) 
    },[]
    )
    return teacher;
}
