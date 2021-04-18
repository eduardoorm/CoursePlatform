import { useState, useEffect } from "react";

export const useFetchPerfil = (state) => {

const [user,setUser]=useState({loading:true,error:null,data:null});
 
useEffect(() => {
  //let token = localStorage.getItem("demo",state) 
  const token = state ||JSON.parse(localStorage.getItem("token")).token

      fetch('http://localhost:3001/Usuario',{
          headers:{
            "Content-Type":"application/json",
            "Authorization":`${token}`
          }
      })
      .then(res=>res.json())
      .then(json=>setUser({loading:false,data:json}))
  
  }, [state]);

  return user;
};