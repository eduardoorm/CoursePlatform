import React, { useEffect, useState } from 'react'
import { getCertificados } from '../helpersAdmin/getCertificados'

export const useFetchGetCertificado = () => {
    const [certificado, setCertificado] = useState({
        dataCertificado:[],
    })
    
    useEffect(()=>{
        getCertificados().then(item=>{
          setCertificado({
              dataCertificado:item,
          }
         )
       }) 
    },[]
    )
    
    return certificado;
}
