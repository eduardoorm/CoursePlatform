import React from 'react'

export const putProfesor =async ({nombre,apellidos},id) => {
    const url =`http://localhost:3001/putProfesor`;
    const sendFields= {
       name,
       lastname,
       id
    }
    if(!localStorage.getItem("token")) return alert ("registrate")
    const {token} = JSON.parse(localStorage.getItem("token"));
    let config ={
       method:"PUT",
       headers:{
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       'Authorization': `${token}`

       },
       body: JSON.stringify(sendFields)
    };
    const res = await fetch(url,config);
    if(res.ok){
        return {ok:true}
    }
}
