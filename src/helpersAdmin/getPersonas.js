import React from 'react'

export const getPersonas = async() => {
    const url = "http://localhost:3001/getUsers";
    const res =await fetch(url);
    const persons = await res.json();
    const person = persons.map(item=>{
       return { 
           id : item.id_person,
           name: item.name,
           lastname:item.lastname,
           email:item.email,
           role:item.role,
       }
    })
    return person
}
