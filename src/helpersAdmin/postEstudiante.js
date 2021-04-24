import React from 'react'

export const postEstudiante =async (form) => {
    const url =`http://localhost:3001/postUser`;

    let config ={
       method:"POST",
       headers:{
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       },
       body: JSON.stringify(form)
    };
    const res = await fetch(url,config);
    console.log("resepuesta",res);
    if(res.ok){
        return {ok:true}
    }
}
