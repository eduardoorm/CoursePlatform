import React from 'react'

export const getSuscripciones = async () => {
    if(!localStorage.getItem("token")) return alert ("Sign up")
    const {token} = JSON.parse(localStorage.getItem("token"));
    let config ={
        method:"GET",
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
        },
     }
    const url = "http://localhost:3001/getSuscripciones";
    const res =await fetch(url,config);
    const subcriptions = await res.json();
    const subscription = subcriptions.map(item=>{
       return { 
           name_person: item.name,
       }
    })
    return subscription
}
