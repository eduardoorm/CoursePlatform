import React from 'react'

export const putCategoria =async ({name},id) => {
     const url =`http://localhost:3001/putCategoria`;
     const sendFields= {
        name,
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
