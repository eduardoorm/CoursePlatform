import React from 'react'

export const getUserID = async(id) => {
    const url=`http://localhost:3001/getUserId/${id}`;
    const response = await fetch(url);
    const personData = await response.json();
    const person = personData.map(student=>{
        return {
            name: student.name,
            lastname: student.lastname,
            email: student.email,
            role: student.role,
            id_person: student.id_person
           }   
    }) 

    return person;
}
