export const putUsuarioPassword = async({id_persona,nombre,apellido,password,pass_confirm}) => {
    const enviarCampos ={id_persona,nombre,apellido,password}
    if(!password) return alert("La contraseña no puede estar vacia");
     if(!localStorage.getItem("token")) return alert ("registrate")
     const {token} = JSON.parse(localStorage.getItem("token"));

     let config ={
        method:"PUT",
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
        },
        body: JSON.stringify(enviarCampos)
     }
     if(password===pass_confirm){
        try{    
            const respuesta = await fetch('http://localhost:3001/putUserPassword',config)
            const res = await respuesta.json();
            (!res.ok) ? alert("Hubo un error") : alert("Se actualizo correctamente")
        }catch{
          console.log();
        }
     }else{
        alert("Las contraseñas deben ser iguales");
    }
    

}
