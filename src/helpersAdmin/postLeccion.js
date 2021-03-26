import React from 'react'

export const postLeccion = async(form,id) => {
    const moduloID = form.id_modulo;
    const regex= /[0-9]\w*/g;
    const found= moduloID.match(regex);
    const id_modulo = found[0];
    
    const enviarCampos={
        ...form,
        id_modulo,
        id_curso:id,
    }
    
    const url =`http://localhost:3001/postLeccion/${id}`;
    let config ={
       method:"POST",
       headers:{
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       },
       body: JSON.stringify(enviarCampos)
    };
    const res = await fetch(url,config);
    if(res.ok){
        alert("Se agrego la lección")
    }
}
