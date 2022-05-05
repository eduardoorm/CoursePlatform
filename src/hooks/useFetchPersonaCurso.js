
import { useEffect,useState } from 'react'
import { getPersonaCurso } from '../helpers/getPersonaCurso'
import { getUsuario } from '../helpers/getUsuario'
export const useFecthPersonaCurso = () => {
    const [state, setstate] = useState({
        dataCourse:[],
    })
    
    useEffect(()=>{  
        getPersonaCurso().then(course=>{
           setstate({
               dataCourse:course
           })
       })
    },[])
    
    return state; //{data:[] }
}
