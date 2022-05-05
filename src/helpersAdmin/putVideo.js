import React from 'react'
import {convertToUrl} from '../functions/ConvertToUrl'

export const putVideo = async(form,id) => {
    const sendFields ={
        name_video:form.name,
        duration_video:form.duration,
        des_video: form.description,
        url_video:convertToUrl(form.name),
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
     }
   
   try{    
    const response = await fetch(`http://localhost:3001/putLeccion/${id}`,config)
    const res = await response.json();
    if(res.ok) return {
        ok:true
    }
    }catch{
    console.log();
 }
}
