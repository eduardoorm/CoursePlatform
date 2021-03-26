import React from 'react'

export const postCurso = async(form) => {
    const url =`http://localhost:3001/postCurso`;
    let config ={
       method:"POST",
       headers:{
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       },
       body: JSON.stringify(form)
    };
    const res = await fetch(url,config);

    if(res.ok){
        alert("Se agrego el Curso")
    }
}
