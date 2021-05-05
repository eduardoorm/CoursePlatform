import React from 'react'

export const getPersonas = async() => {
    const url = "http://localhost:3001/getUsers";
    const res =await fetch(url);
    const personas = await res.json();
    const persona = personas.map(item=>{
       return { 
           id : item.id_persona,
           nombre: item.nombre,
           apellidos:item.apellidos,
           email:item.email,
           role:item.role,
       }
    })
    return persona
}
