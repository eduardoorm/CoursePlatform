import React from 'react'

export const postSection = async(form,id) => {
    const sendFields={
        name_module:form.name,
        id_course:form.id_course,
        url_curso: id,
    }
    const url =`http://localhost:3001/postSeccion`;
    const {token} = JSON.parse(localStorage.getItem("token"));
    let config ={
       method:"POST",
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
