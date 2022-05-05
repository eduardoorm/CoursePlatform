
import { useEffect,useState } from 'react'
import { getModulo } from '../helpers/getModulo'
export const useFetchModulo = (id) => {
    const [modules, setModules] = useState({
        dataModules:[],
    })
    
    useEffect(()=>{
       getModulo(id).then(modules=>{
           setModules({
               dataModules:modules,
           })
       })
    },[])

    return modules; //{data:[] , loading:true}
}
