
import { useEffect,useState } from 'react'
import { getUsuario } from '../helpers/getUsuario'
export const UseFecthUsuario = () => {
    const [state, setstate] = useState({
        data:[],
        loading:true,
    })
    
    useEffect(()=>{
       getUsuario().then(user=>{
           setstate({
               data:user,
               loading:false,
           })
       })
    },[])
    return state; //{data:[] , loading:true}
}
