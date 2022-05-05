
import { useEffect,useState } from 'react'
import { getSuscripciones } from '../helpersAdmin/getSuscripciones'

export const useFetchGetSuscripciones = () => {
    const [subscriptions, setSubscriptions] = useState({
        dataSubscriptions:[],
    })
    
    useEffect(()=>{
       getSuscripciones().then(user=>{
           setSubscriptions({
               dataSubscriptions:user,
           })
       })
    },[])
    return subscriptions; 
}
