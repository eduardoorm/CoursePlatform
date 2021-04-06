import React from 'react'

export const postProfesor =async (profesor) => {
     const url =`http://localhost:3001/addProfesor`;
     let config ={
        method:"POST",
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(profesor)
     };
     const res = await fetch(url,config);
     if(res.ok){
         alert("Se agrego el profesor")
     }
}
