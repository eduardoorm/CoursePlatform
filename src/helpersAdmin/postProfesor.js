import React from 'react'

export const postProfesor =async (profesor) => {
     const url =`http://localhost:3001/addProfesor`;
     if(!localStorage.getItem("token")) return alert ("Sign up")
    const {token} = JSON.parse(localStorage.getItem("token"));
     let config ={
        method:"POST",
        headers:{
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         'Authorization': `${token}`
        },
        body: JSON.stringify(profesor)
     };
     const res = await fetch(url,config);
     if(res.ok){
        return {ok:true}
    }
}
