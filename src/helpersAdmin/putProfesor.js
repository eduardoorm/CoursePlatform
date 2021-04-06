import React from 'react'

export const putProfesor =async ({nombre,apellidos},id) => {
    const url =`http://localhost:3001/putProfesor`;
    const enviarCampos= {
       nombre,
       apellidos,
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
        alert("Se actualizo el profesor")
    }
}
