
export const getPersonaCurso = async () => {
    if(!localStorage.getItem("token")) return alert("logueate");  
    const {token} = JSON.parse(localStorage.getItem("token"));
    const url="http://localhost:3001/personaCurso";
    let config = {headers: {
        "Content-Type": "application/json",
        "Authorization": `${token}`,
        }}

    const response = await fetch(url,config);
 
    if(!response.ok){
    localStorage.clear();
    }
    
    const res= await response.json();
    const cursos = res?.map(curso=>{
        return{    
        nombre:curso.nom_curso,
        descripcion:curso.des_curso,
        duracion:curso.duracion,   
        }
    })
    return cursos;
}
