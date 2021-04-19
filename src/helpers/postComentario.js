import React from 'react'

export const postComentario =async (comment) => {
     const url =`http://localhost:3001/comentario`;
     if(!localStorage.getItem("token")) return alert("Registrate!")
     const token = JSON.parse(localStorage.getItem("token"));
     let config ={
        method:"POST",
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token.token}`
        },
        body: JSON.stringify(comment)
     };
     const res = await fetch(url,config);
     const respuesta = await res.json()
     return respuesta;
}
