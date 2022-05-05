
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
            id_certificate : item.id_certificate,
            name_course: item.name_course,
            name_person:item.name,
            id_person:item.id_person ,
            email: item.email
           }   
    }) 
    return certificate;
}
