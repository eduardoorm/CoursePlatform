import React from 'react'

export const postImgCurso = async (fd) => {
    if(!localStorage.getItem("token")) return alert ("registrate")
    const {token} = JSON.parse(localStorage.getItem("token"));

    console.log("fd",fd.get("imagen")); 
     let config ={
        method:"POST",
        enctype:"multipart/form-data",
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
        },
        body: JSON.stringify(fd)
     }
   try{    
    const respuesta = await fetch(`http://localhost:3001/uploadImgCurso`,config)
    const res = await respuesta.json();
    (!res.ok) ? alert("Hubo un error") : alert("Se Agrego la Imagen")
    }catch{
  console.log();
  }
}
