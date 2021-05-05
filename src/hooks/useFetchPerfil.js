import axios from "axios";
import { useState, useEffect } from "react";

export const useFetchPerfil = async (state) => {

const [user,setUser]=useState({loading:true,error:null,data:null});
 
useEffect(async() => {
  const token = state || JSON.parse(localStorage.getItem("token")).token;
  
    let config={
          headers:{
            "Content-Type":"application/json",
            "Authorization":`${token}`,
          }
    }

     const {data} = await axios.get('http://localhost:3001/Usuario',config)
     const {user}= data;
     setUser(user)
     console.log("respuesta",user);
  
  }, [state]);

  return user;
};