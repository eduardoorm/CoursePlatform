import React, { useEffect, useState } from 'react'
import { getCategoriaPorID } from '../helpersAdmin/getCategoriaPorID'

export const useFetchGetCategoriaID = (id) => {
    
    const [category, setCategory] = useState({
        dataCategory:[],
    })
     
   useEffect(()=>{
    getCategoriaPorID(id).then(category=>{
        setCategory(
            {
            dataCategoria:category
           }
        )
    })
   },[])
   
    return category;
}
