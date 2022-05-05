import React from 'react'

export const postCategoria =async (category) => {
     const url =`http://localhost:3001/addCategoria`;
     if(!localStorage.getItem("token")) return alert ("registrate")
     const {token} = JSON.parse(localStorage.getItem("token"));

      let config ={
        method:"POST",
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
        },
        body: JSON.stringify(category)
     };
     const res = await fetch(url,config);
     if(res.ok){
        return {ok:true}
     }
}
