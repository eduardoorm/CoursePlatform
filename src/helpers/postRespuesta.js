import React from 'react'

export const postRespuesta = async (responseData) => {
      const url= `http://localhost:3001/respuesta`;
      const sendFields={
          ...responseData,
          date_response: Date.now(),
      }

      if(!localStorage.getItem("token")) return alert("Sign up")
      const {token} = JSON.parse(localStorage.getItem("token"));
      let config={
        method:'POST',
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
        },
        body: JSON.stringify(sendFields)
      } 
      
      const res = await fetch(url,config);
      const response = await res.json()
      return response;
}
