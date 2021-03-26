import React from 'react'

export const postComentario =async (coment,id,id_video) => {
     const url =`http://localhost:3001/comentario`;
     const fecha_comentario = Date.now();
     const enviarComentario={
         ...coment,
         fecha_comentario,
         id_curso:id,
         id_video:id_video,
     }
     if(!localStorage.getItem("token")) return alert("Registrate!")
     const token = JSON.parse(localStorage.getItem("token"));
     let config ={
        method:"POST",
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token.token}`
        },
        body: JSON.stringify(enviarComentario)
     };
     const res = await fetch(url,config);
     if(res.ok){
        alert("Se agrego el comentario")
    }
}
