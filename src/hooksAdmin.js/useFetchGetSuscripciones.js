
import { useEffect,useState } from 'react'
import { getSuscripciones } from '../helpersAdmin/getSuscripciones'

export const useFetchGetSuscripciones = () => {
    const [suscripciones, setSuscripciones] = useState({
        dataSuscripciones:[],
    })
    
    useEffect(()=>{
       getSuscripciones().then(user=>{
           setSuscripciones({
               dataSuscripciones:user,
           })
       })
    },[])
    return suscripciones; 
}
