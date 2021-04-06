import React from 'react'
import { Redirect,Route } from 'react-router';
export const loginUser = async(data) => {
    try {
        let config ={
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        }   
       
        let res = await fetch('http://localhost:3001/loginUser',config)
        let token = await res.json();

         if(res.ok){
              localStorage.setItem("token",JSON.stringify(token));
             return {
               ok:true
             }
         }else{
             alert("DATOS INVALIDOS")
         }

    } catch (error) {
        /*CAMBIAR*/
        console.log(error)
    }
    
   
}
