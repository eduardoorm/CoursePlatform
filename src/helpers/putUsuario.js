import React from 'react'
import { useFecthUsuario } from '../hooks/useFecthUsuario';
export const putUsuario = async({id_persona,nombre,apellido}) => {
     const enviarCampos ={id_persona,nombre,apellido}
     if(!localStorage.getItem("token")) return alert ("registrate")
     const {token} = JSON.parse(localStorage.getItem("token"));

     let config ={
        method:"PUT",
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
        },
        body: JSON.stringify(enviarCampos)
     }

     try{    
         const respuesta = await fetch('http://localhost:3001/putUser',config)
         const res = await respuesta.json();
         (!res.ok) ? alert("Hubo un error") : alert("Se actualizo correctamente")
     }catch{
       console.log();
     }
}
