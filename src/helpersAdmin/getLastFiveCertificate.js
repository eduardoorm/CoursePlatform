
export const getLastFiveCertificate = async () => {
    if(!localStorage.getItem("token")) return alert ("registrate")
    const {token} = JSON.parse(localStorage.getItem("token"));
    let config ={
        method:"GET",
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
        },
     }
    const url=`http://localhost:3001/getLastFiveCertificate`;
    const response = await fetch(url,config);
    const certificates= await response.json();
   
    const certificate = certificates.map(item=>{
        return {  
            id_certificado : item.id_certificado,
            nombre_curso: item.nombre_curso,
            nombre_persona:item.nombre,
            id_persona:item.id_persona ,
            email: item.email
           }   
    }) 
    return certificate;
}
