import React from 'react'

export const getSubsByCursoID = async(id) => {
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
    const url=`http://localhost:3001/getSubsPorCurso/${id}`;
    const response = await fetch(url,config);
    const subscriptions = await response.json();
   
    const subs = subscriptions.map(item=>{
        return {
            email: item.email,  
            name: item.name,
            lastname: item.lastname,
            name_course: item.name_course,
           }   
    }) 

    return subs;
}
