
export const getPersonaCurso = async () => {
    if(!localStorage.getItem("token")) return alert("Sign Up");  
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
    const courses = res?.map(course=>{
        return{    
        name:course.name_course,
        description:course.des_course,
        duration:course.duration,   
        }
    })
    return courses;
}
