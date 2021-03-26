import React from 'react'

export const deleteComentario = async(id) => {
    let config ={
        method:"DELETE",
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
     }
    try{    
     const respuesta = await fetch(`http://localhost:3001/deleteComentario/${id}`,config)
     const res = await respuesta.json();
     (!res.ok) ? alert("Hubo un error") : alert("Se Elimino Correctamente")
    }catch{
     console.log();
}
}