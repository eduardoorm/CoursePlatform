import React, { useEffect, useState } from 'react'

import { getCertificados } from '../helpersAdmin/getCertificados'

export const useFetchGetCertificado = () => {
    const [certificate, setCertificate] = useState({
        dataCertificate:[],
    })
    
    useEffect(()=>{
        getCertificados().then(item=>{
            setCertificate({
              dataCertificate:item,
          }
         )
       }) 
    },[]
    )
    
    return certificate;
}
