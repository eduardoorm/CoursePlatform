import React from 'react'

export const postCertificado = async(form) => {
    const url =`http://localhost:3001/postCertificado`;
    if(!localStorage.getItem("token")) return alert ("registrate")
    const {token} = JSON.parse(localStorage.getItem("token"));
    let config ={
       method:"POST",
       headers:{
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       'Authorization': `${token}`
       },
       body: JSON.stringify(form)
    };
    const res = await fetch(url,config);
     console.log(res);
     if(res.ok){
        return {ok:true}
    }
}
