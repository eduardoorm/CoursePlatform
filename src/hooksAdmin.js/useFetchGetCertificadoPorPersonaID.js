import React, { useEffect, useState } from 'react'
import { getCertificadoPorPersonaID } from '../helpersAdmin/getCertificadoPorPersonaID'

export const useFetchGetCertificadoPorPersonaID = (id) => {
    const [certificados, setCertificados] = useState({
        dataCertificado:[],
    })
   
   useEffect(()=>{
    getCertificadoPorPersonaID(id).then(item=>{
        setCertificados(
            {
           dataCertificado:item
           }
        )
    })
   },[])
   
    return certificados;
}
