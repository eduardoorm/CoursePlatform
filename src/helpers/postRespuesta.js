import React from 'react'

export const postRespuesta = async (respuestaTXT) => {
      const url= `http://localhost:3001/respuesta`;
      const enviarCampos={
          ...respuestaTXT,
          fecha_respuesta: Date.now(),
      }

      if(!localStorage.getItem("token")) return alert("Registrate")
      const {token} = JSON.parse(localStorage.getItem("token"));
      let config={
        method:'POST',
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
        },
        body: JSON.stringify(enviarCampos)
      } 
      
      const res = await fetch(url,config);
      const respuesta = await res.json()
      return respuesta;
}
