import React from 'react'

export const getEstudianteID =async (id) => {
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
    const url=`http://localhost:3001/getEstudiantePorID/${id}`;
    const response = await fetch(url,config);
    const students = await response.json();
    const student = students.map(student=>{
        return {
            id: student.id_student,  
            name: student.name,
            lastaname: student.lastanames,
            email: student.email,
            role: student.role,
            id_person: student.id_person
           }   
    }) 

    return student;
}
