export const postCurso = async(form,fd) => {

    const ruta_con_espacios = form.nom_curso;
    const regex = / /g;
    const ruta_curso=ruta_con_espacios.trim().replace(regex, '-');
    const data ={ 
        ...form,
        fd,
        ruta_curso 
    }
    if(!localStorage.getItem("token")) return alert ("registrate")
    const {token} = JSON.parse(localStorage.getItem("token"));
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
