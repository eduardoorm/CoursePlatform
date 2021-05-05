import React, { useEffect, useState } from 'react'
import { getLastFiveStudents } from '../helpersAdmin/getLastFiveStudents'

export const useFetchGetLasFiveStudents = () => {
    const [students, setStudents] = useState({
        dataStudent:[],
    })

     useEffect(()=>{
        getLastFiveStudents().then(item=>{
          setStudents({
              dataStudent:item,
          }
         )
       }) 
    },[]
    )
   
    return students;
}
