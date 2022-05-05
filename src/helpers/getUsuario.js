export const getUsuario = async () => {

            if(!localStorage.getItem("token")) return alert("Sign Up");  
            const {token} = JSON.parse(localStorage.getItem("token"));

            const url="http://localhost:3001/Usuario";
            let config = {headers: {
                "Content-Type": "application/json",
                "Authorization": `${token}`,
                }}

            const response = await fetch(url,config);
             
            if(!response.ok) return localStorage.clear();
          
            const {userData} = await response.json();
            const user = {
              name:userData.name,
              lastname:userData.lastname,
              email:userData.email,
              id_person:userData.id_person,
              role:userData.role,
              imageUrl: userData.imageUrl,
             }
               
     return user;
}
