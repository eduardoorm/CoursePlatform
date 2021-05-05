
import { useEffect,useState } from 'react'
import { getLecciones } from '../helpers/getLecciones'

export const useFetchGetLecciones = () => {
    const [lecciones, setLecciones] = useState({
        dataLecciones:[],
    })
    
    useEffect(()=>{
       getLecciones().then(user=>{
           setLecciones({
               dataLecciones:user,
           })
       })
    },[])
    return lecciones; 
}
