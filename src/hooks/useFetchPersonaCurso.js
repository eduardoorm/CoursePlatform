
import { useEffect,useState } from 'react'
import { getPersonaCurso } from '../helpers/getPersonaCurso'
import { getUsuario } from '../helpers/getUsuario'
export const useFecthPersonaCurso = () => {
    const [state, setstate] = useState({
        dataCurso:[],
    })
    
    useEffect(()=>{  
        getPersonaCurso().then(curso=>{
           setstate({
               dataCurso:curso
           })
       })
    },[])
    
    return state; //{data:[] }
}
