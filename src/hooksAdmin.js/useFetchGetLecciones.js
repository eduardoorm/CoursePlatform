
import { useEffect,useState } from 'react'
import { getLecciones } from '../helpers/getLecciones'

export const useFetchGetLecciones = () => {
    const [lessons, setLessons] = useState({
        dataLessons:[],
    })
    
    useEffect(()=>{
       getLecciones().then(user=>{
        setLessons({
               dataLessons:user,
           })
       })
    },[])
    return lessons; 
}
