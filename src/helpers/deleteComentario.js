import React from 'react'

export const deleteComentario = async(id) => {
    if(!localStorage.getItem("token")) return alert ("Sign up")
     const {token} = JSON.parse(localStorage.getItem("token"));
    let config ={
        method:"DELETE",
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
        },
     }
    try{    
     const respuesta = await fetch(`http://localhost:3001/deleteComentario/${id}`,config)
     const res = await respuesta.json();
     (!res.ok) ? alert("There was an error") : alert("It was successfully deleted")
    }catch{
     console.log();
}
}