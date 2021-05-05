import React from 'react'
import {convertToUrl} from '../functions/ConvertToUrl'
export const postLeccion = async(form,id) => {
    const moduloID = form.id_modulo;
    const regex= /[0-9]\w*/g;
    const found= moduloID.match(regex);
    const id_modulo = Number(found[0]);

    const enviarCampos={
        ...form,
        ruta_curso:id,
        id_modulo,
        ruta_video:convertToUrl(form.nom_video),
        id_curso:form?.id_curso,
    }

    if(!localStorage.getItem("token")) return alert ("registrate")
    const {token} = JSON.parse(localStorage.getItem("token"));

    const url =`http://localhost:3001/postLeccion/${form?.id_curso}`;
    let config ={
       method:"POST",
       headers:{
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       'Authorization': `${token}`
       },
       body: JSON.stringify(enviarCampos)
    };
    const res = await fetch(url,config);
    if(res.ok){
        return {ok:true}
    }
}
