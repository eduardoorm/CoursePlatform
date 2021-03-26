import React, { useEffect, useState } from 'react'
import { getCategoriaPorID } from '../helpersAdmin/getCategoriaPorID'

export const useFetchGetCategoriaID = (id) => {
    
    const [categoria, setCategoria] = useState({
        dataCategoria:[],
    })
     
   useEffect(()=>{
    getCategoriaPorID(id).then(categoria=>{
        setCategoria(
            {
            dataCategoria:categoria
           }
        )
    })
   },[])
   
    return categoria;
}
