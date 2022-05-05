import React from 'react'

export const putCertificado = async({name_course},id_person,id_certificate) => {
    const url =`http://localhost:3001/putCertificado/${id_certificate}`;
    const sendFields= {
       name_course,
       id_person,
    } 
    if(!localStorage.getItem("token")) return alert ("registrate")
    const {token} = JSON.parse(localStorage.getItem("token"));

    let config ={
       method:"PUT",
       headers:{
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       'Authorization': `${token}`

       },
       body: JSON.stringify(sendFields)
    };
    const res = await fetch(url,config);
    if(res.ok){
        return {ok:true}
    }
}
