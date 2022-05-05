import React from 'react'
import { useFecthUsuario } from '../hooks/useFecthUsuario';
export const putUsuario = async({id_person,name,lastname}) => {
     const sendFields ={id_person,name,lastname}
     if(!localStorage.getItem("token")) return alert ("Sign Up")
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
         
         if (res.ok) {
           localStorage.setItem("token",JSON.stringify({token:res.newToken}));
           return {ok:true,token:res.newToken}
         }
     }catch{
       console.log();
     }
}
