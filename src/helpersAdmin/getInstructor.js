import React from 'react'

export const getInstructor = async () => {
    const url = "http://localhost:3001/getInstructor";
    const response =await fetch(url);
    const instructors = await response.json();
    const instructor = instructors.map(item=>{
       return { 
           id : item.id_instructor,
          name: item.name,
          lastname:item.lastname,
       }
    })
    return instructor
}
