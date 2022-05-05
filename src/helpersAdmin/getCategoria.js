import React from 'react'

export const getCategoria = async() => {
    if(!localStorage.getItem("token")) return alert ("Sign up")
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
    const response =await fetch(url,config);
    const categories = await response.json();
    const category = categories.map(item=>{
       return { 
           id : item.id_category,
          name: item.name_cate
       }
    })
    return category

}
