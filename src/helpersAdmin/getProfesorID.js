import React from 'react'

export const getPorfesorID = async(id) => {
    const url=`http://localhost:3001/getInstrucorID/${id}`;
    const response = await fetch(url);
    const teachers= await response.json();
    const teacher = teachers.map(item=>{
        return {
            id: item.id_teacher,  
            name: item.name,
            lastname: item.lastname
           }   
    }) 
    return teacher;
}
