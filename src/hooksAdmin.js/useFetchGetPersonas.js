import React from 'react'
import { getPersonas } from '../helpersAdmin/getPersonas'

export const useFetchGetPersonas = () => {
    const [personas, setPersona] = useState({
        dataPersona:[],
    })

     useEffect(()=>{
        getPersonas().then(item=>{
          setPersona({
              dataPersona:item,
          }
         )
       }) 
    },[]
    )
   
    return personas;
}
