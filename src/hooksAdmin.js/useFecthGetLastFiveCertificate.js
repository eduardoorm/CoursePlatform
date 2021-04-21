import React, { useEffect, useState } from 'react'
import { getLastFiveCertificate } from '../helpersAdmin/getLastFiveCertificate'

export const useFecthGetLastFiveCertificate = () => {
  
        const [certificates, setCertificates] = useState({
            dataCertificate:[],
        })
    
         useEffect(()=>{
            getLastFiveCertificate().then(item=>{
              setCertificates({
                  dataCertificate:item,
              }
             )
           }) 
        },[]
        )
       console.log(certificates);
        return certificates;
    
}
