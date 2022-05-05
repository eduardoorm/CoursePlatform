export const putUsuarioPassword = async({id_person,name,lastname,password,pass_confirm}) => {
    const sendFields ={id_person,name,lastname,password}
    if(!password) return alert("Password cannot be empty");
     if(!localStorage.getItem("token")) return alert ("Sign up")
     const {token} = JSON.parse(localStorage.getItem("token"));

     let config ={
        method:"PUT",
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
        },
        body: JSON.stringify(sendFields)
     }
     if(password===pass_confirm){
        try{    
            const response = await fetch('http://localhost:3001/putUserPassword',config)
            const res = await response.json();
            (!res.ok) ? alert("There was an error") : alert("It was updated successfully")
        }catch{
          console.log();
        }
     }else{
        alert("Passwords must be the same");
    }
    

}
