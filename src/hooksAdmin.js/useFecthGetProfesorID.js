import React, { useEffect, useState } from 'react'
import { getPorfesorID } from '../helpersAdmin/getProfesorID'
export const useFecthGetProfesorID = (id) => {
   
    const [profesor, setProfesor] = useState({
        dataProfesor:[],
    })
     
   useEffect(()=>{
    getPorfesorID(id).then(item=>{
        setProfesor(
            {
            dataProfesor:item
           }
        )
    })
   },[])
   
    return profesor;
}
