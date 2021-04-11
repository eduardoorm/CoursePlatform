import React from 'react'

export const getCategoriaPorID = async(id) => {
    if(!localStorage.getItem("token")) return alert ("registrate")
    const {token} = JSON.parse(localStorage.getItem("token"));
    let config ={
        method:"GET",
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
        },
     }
    const url=`http://localhost:3001/getCategoriasPorID/${id}`;
    const response = await fetch(url,config);
    const categorias= await response.json();
    
    const categoria = categorias.map(cate=>{
        return {
            id: cate.id_categoria,  
            nombre: cate.nom_cate,
           }   
    }) 
    return categoria;
}
