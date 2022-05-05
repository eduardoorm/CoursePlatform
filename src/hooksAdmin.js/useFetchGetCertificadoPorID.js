import React, { useEffect, useState } from 'react'
import { getCertificadoPordID } from '../helpersAdmin/getCertificadoPordID'

export const useFetchGetCertificadoPorID = (id) => {
    const [certificate, setCertificate] = useState({
        dataCertificate:[],
    })

   useEffect(()=>{
    getCertificadoPordID(id).then(item=>{
        setCertificate(
            {
           dataCertificado:item
           }
        )
    })
   },[])
   
    return certificate;
}
