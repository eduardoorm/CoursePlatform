import React, { useEffect, useState } from 'react'
import { getPersonas } from '../helpersAdmin/getPersonas'

export const useFetchGetPersonas = () => {
    const [persons, setPerson] = useState({
        dataPerson:[],
    }) 

     useEffect(()=>{
        getPersonas().then(item=>{
            setPerson({
              dataPerson:item,
          }
         )
       }) 
    },[]
    )
   
    return persons;
}
