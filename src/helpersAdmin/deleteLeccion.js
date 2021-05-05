import React from 'react'

export const deleteLeccion = async(id) => {
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
    const respuesta = await fetch(`http://localhost:3001/deleteLeccion/${id}`,config)
    const res = await respuesta.json();
    (!res.ok) ? alert("Hubo un error") : alert("Se Elimino Correctamente")
   }catch{
    console.log();
  }
}
