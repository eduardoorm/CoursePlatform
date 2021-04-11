import React from 'react'

export const postEstudiante =async (form) => {
    const url =`http://localhost:3001/postUser`;
    if(!localStorage.getItem("token")) return alert ("registrate")
    const {token} = JSON.parse(localStorage.getItem("token"));
    let config ={
       method:"POST",
       headers:{
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       'Authorization': `${token}`
       },
       body: JSON.stringify(form)
    };
    console.log("antes del await");
    const res = await fetch(url,config);
    console.log("despues del await");
    if(res.ok){
        return {ok:true}
    }
}
