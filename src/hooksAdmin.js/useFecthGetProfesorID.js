import React, { useEffect, useState } from 'react'
import { getPorfesorID } from '../helpersAdmin/getProfesorID'
export const useFecthGetProfesorID = (id) => {
   
    const [teacher, setTeacher] = useState({
        dataTeacher:[],
    })
     
   useEffect(()=>{
    getPorfesorID(id).then(item=>{
        setTeacher(
            {
            dataTeacher:item
           }
        )
    })
   },[])
   
    return teacher;
}
