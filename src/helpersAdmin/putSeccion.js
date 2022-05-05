import React from 'react'

export const putSeccion = async(form,id) => {

    const sendFields ={
        name_module:form.name,
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
    const response = await fetch(`http://localhost:3001/putSeccion/${id}`,config)
    const res = await response.json();
    if (res.ok) return{ok:true}
    }catch{
    console.log();
 }
}
