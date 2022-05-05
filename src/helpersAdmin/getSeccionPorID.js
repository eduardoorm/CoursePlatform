import React from 'react'

export const getSeccionPorID = async (id) => {
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
    const url=`http://localhost:3001/getSeccionPorID/${id}`;
    const response = await fetch(url,config);
    const sections = await response.json();
    const section = sections.map(item=>{
        return {
            id_module: item.id_module,  
            name: item.name_module,
            id_course: item.id_course,
           }   
    }) 

    return section;
}
