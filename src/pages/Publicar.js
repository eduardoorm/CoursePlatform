import PublicarComp from '../components/Publicar-comp'
import {useEffect,useState} from 'react'
import{useHistory} from 'react-router-dom'
export default function PublicarCurso(){
    let history=useHistory();
    const [publicar,setPublicar] = useState(false);

    useEffect(()=>{
      async function fetchUser(){
            const {token} = JSON.parse(localStorage.getItem("token"));
            let config ={
                headers:{
                    "Content-Type":"application/json",
                    "Authorization": `${token}`
                }
            }
            const response = await fetch("http://localhost:3001/Usuario",config);
            const {role} = await response.json();
            (role ==="ADMIN ROLE") ? setPublicar(true)  :(history.push("/")) 
        }
        fetchUser();
    },[])
    
   return(
       <>
       {publicar ? <PublicarComp/> : <></> }
       </>
   )
}