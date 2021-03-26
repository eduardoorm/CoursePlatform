import React from 'react'

export const postCategoria =async (categoria) => {
     const url =`http://localhost:3001/addCategoria`;
     let config ={
        method:"POST",
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(categoria)
     };
     const res = await fetch(url,config);
     if(res.ok){
         alert("Se agrego la categoria")
     }
}
