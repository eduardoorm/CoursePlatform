import React, { useEffect, useState } from 'react'
import { getCertificadoPordID } from '../helpersAdmin/getCertificadoPordID'

export const useFetchGetCertificadoPorID = (id) => {
    const [certificado, setCertificado] = useState({
        dataCertificado:[],
    })
   
   useEffect(()=>{
    getCertificadoPordID(id).then(item=>{
        setCertificado(
            {
           dataCertificado:item
           }
        )
    })
   },[])
   
    return certificado;
}
