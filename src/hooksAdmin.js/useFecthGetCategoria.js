import React, { useEffect, useState } from 'react'
import { getCategoria } from '../helpersAdmin/getCategoria'

export const useFecthGetCategoria = () => {
      const [categoria, setCategoria] = useState({
          dataCategoria:[],
      })
      
      useEffect(()=>{
          getCategoria().then(item=>{
            setCategoria({
                dataCategoria:item,
            }
           )
         }) 
      },[]
      )
      return categoria;
}
