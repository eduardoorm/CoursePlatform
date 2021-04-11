import React from 'react'

export const getCategoria = async() => {
    if(!localStorage.getItem("token")) return alert ("registrate")
    const {token} = JSON.parse(localStorage.getItem("token"));
    
    const url = "http://localhost:3001/getCategorias";
    let config ={
        method:"GET",
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
        },
     }
    const respuesta =await fetch(url,config);
    const categorias = await respuesta.json();
    const categoria = categorias.map(item=>{
       return { 
           id : item.id_categoria,
          nombre: item.nom_cate
       }
    })
    return categoria

}
