import React from 'react'

export const getLastFiveStudents = async() => {
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
    const url=`http://localhost:3001/getLastFiveStudents`;
    const response = await fetch(url,config);
    const students= await response.json();
    const student = students.map(item=>{
        return {
            id : item.id_estudiante,
            nombre: item.nombre,
            apellidos:item.apellidos,
            email:item.email,
            role:item.role,
            id_persona:item.id_persona,
           }   
    }) 
    return student;
}
