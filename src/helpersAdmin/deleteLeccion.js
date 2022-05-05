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
    const response = await fetch(`http://localhost:3001/deleteLeccion/${id}`,config)
    const res = await response.json();
    (!res.ok) ? alert("There was a mistake") : alert("It was deleted correctly")
   }catch{
    console.log();
  }
}
