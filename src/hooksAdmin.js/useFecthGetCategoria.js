import React, { useEffect, useState } from 'react'
import { getCategoria } from '../helpersAdmin/getCategoria'

export const useFecthGetCategoria = () => {
      const [category, setCategory] = useState({
          dataCategory:[],
      })
      
      useEffect(()=>{
          getCategoria().then(item=>{
            setCategory({
                dataCategory:item,
            }
           )
         }) 
      },[]
      )
      return category;
}
