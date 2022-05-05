import React from 'react'

export const getSeccion = async () => {
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
    const url = "http://localhost:3001/getSeccion";
    const res =await fetch(url,config);
    const sections = await res.json();
    const section = sections.map(item=>{
       return { 
           id : item.id_module,
           name: item.nom_module,
           id_course:item.id_course,
       }
    })
    return section
}
