import React from 'react'

export const postCertificado = async(form) => {
    const url =`http://localhost:3001/postCertificado`;
    let config ={
       method:"POST",
       headers:{
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       },
       body: JSON.stringify(form)
    };
    const res = await fetch(url,config);
     console.log(res);
    if(res.ok){
        alert("Se agrego el Certificado")
    }
}
