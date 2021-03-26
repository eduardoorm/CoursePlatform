

export const getUsuario = async () => {
            if(!localStorage.getItem("token")) return alert("logueate");  
            const {token} = JSON.parse(localStorage.getItem("token"));

            const url="http://localhost:3001/Usuario";
            let config = {headers: {
                "Content-Type": "application/json",
                "Authorization": `${token}`,
                }}

            const response = await fetch(url,config);
         
            if(!response.ok) return localStorage.clear();
          
            const user = await response.json();
            const usuario = {
              nombre:user.nombre,
              apellido:user.apellidos,
              email:user.email,
              id_persona:user.id_persona
             }
               
     return usuario;
}
