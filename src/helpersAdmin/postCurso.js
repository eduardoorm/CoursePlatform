import {convertToUrl} from '../functions/ConvertToUrl'

export const postCurso = async(form) => {

    const data ={ 
        ...form,
        fecha_curso: Date.now(),
        ruta_curso: convertToUrl(form.nom_curso)
    }

    if(!localStorage.getItem("token")) return alert ("registrate")
    const {token} = JSON.parse(localStorage.getItem("token"));
    console.log("token enviado",token);
    const url =`http://localhost:3001/postCurso`;
    let config ={
       method:"POST",
       headers:{
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       'Authorization': `${token}`
       },
       body: JSON.stringify(data)
    };
    const res = await fetch(url,config);

    if(res.ok){
        return {ok:true}
    }
}
