
import { useEffect,useState } from 'react'
import { getModulo } from '../helpers/getModulo'
export const useFetchModulo = (id) => {
    const [modulos, setModulos] = useState({
        dataModulos:[],
    })
    
    useEffect(()=>{
       getModulo(id).then(modulos=>{
           setModulos({
               dataModulos:modulos,
           })
       })
    },[])

    return modulos; //{data:[] , loading:true}
}
