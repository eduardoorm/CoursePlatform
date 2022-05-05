import React from 'react'

export const putEstudiante = async (form,id) => {
    const sendFields ={
        id_person:id,
        name:form.name,
        lastname:form.lastname,
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
    const response = await fetch('http://localhost:3001/putUser',config)
    const res = await response.json();
   
    if(res.ok){
      return {ok:true}
  }
    }catch{
  console.log();
  }
}
