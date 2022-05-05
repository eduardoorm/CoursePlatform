import React from 'react'
export const deleteRespuesta = async(id) => {
    if(!localStorage.getItem("token")) return alert ("registrate")
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
     const response = await fetch(`http://localhost:3001/deleteRespuesta/${id}`,config)
     const res = await response.json();
     (!res.ok) ? alert("There was an error") : alert("It was successfully deleted")
    }catch{
     console.log();
}
}