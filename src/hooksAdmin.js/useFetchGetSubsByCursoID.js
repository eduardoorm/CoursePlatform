import React, { useEffect, useState } from 'react'
import { getSubsByCursoID } from '../helpersAdmin/getSubsByCursoId'
export const useFetchGetSubsByCursoID = (id) => {
    const [subcriptions, setSubscriptions] = useState({
        dataSubscriptions:[],
    })
     
   useEffect(()=>{
    getSubsByCursoID(id).then(item=>{
        setSubscriptions(
            {
            dataSubscriptions:item
           }
        )
    })
   },[])
   
    return subcriptions;
}
