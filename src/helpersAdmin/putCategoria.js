import React from 'react'

export const putCategoria =async ({nombre},id) => {
     const url =`http://localhost:3001/putCategoria`;
     const enviarCampos= {
        nombre,
        id
     }
     let config ={
        method:"PUT",
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(enviarCampos)
     };
     const res = await fetch(url,config);
     if(res.ok){
         alert("Se actualizo la categoria")
     }
}
