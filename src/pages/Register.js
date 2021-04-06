import React, {Component, useState} from 'react';
import Input from '../components/Input';
import styled from 'styled-components'
import {Formulario} from '../elementos/Formularios'
import {Btn} from '../components/Button'
import {Redirect} from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { postEstudiante } from '../helpersAdmin/postEstudiante';

export default function Register (){
     const [form, setForm] = useState({})
     const [register, setRegister] = useState(false)
     const handleChange = e =>{
        setForm({
                ...form,
                [e.target.name] : e.target.value
        })
    }
    const handleSubmit = async(e) =>{
       e.preventDefault()
       try {
         let config ={
           method: 'POST',
           headers:{
               'Accept': 'application/json',
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(this.state.form),
          
         }

         let res = await fetch('http://localhost:3001/postUser',config)
         let json = await (res);
         if(res.ok){
            setRegister(true)
         }else{
             console.log("No se pudo registar");
         }
        
       } catch (error) {
           
       }
    }
    
    const respuestaGoogle =(response)=>{
        const dataUser= response.profileObj;
        //el data user trae email,familyName,givenName,googleId,imageUrl y el name
        const { email,familyName,givenName,googleId} = dataUser;
        const sendDataUser = {
            email,
            apellidos:familyName,
            password:googleId,
            nombre:givenName,
        }
        postEstudiante(sendDataUser)
    }
        
    if(register){
        return <Redirect to="/login"/>
    }
    return(
        <>
        <div className="formulario-contenedor">
            <div className="form-titulo">
                    <h1>Inscríbete y comienza a aprender.</h1> 
            </div>
            <div className="form-post">
           
            <GoogleLogin
                clientId="593174414261-1gu1nc4svuu26erj483ptivnt56i5ab2.apps.googleusercontent.com"
                buttonText="Register"
                onSuccess={respuestaGoogle}
                onFailure={respuestaGoogle}
                cookiePolicy={'single_host_origin'}
            />
            <br/> <br/>
            <Formulario id="form" onChange={handleChange} onSubmit={handleSubmit}>
                    <Input
                    placeholder="Nombres"
                    id="nombres"
                    name="nombre"
                    type="text"
                    /> 
                     <Input
                    placeholder="Apellidos"
                    id="apellidos"
                    name="apellidos"
                    type="text"
                    /> 
                     <Input
                     placeholder="Email"
                     id="email"
                     name="email"
                     type="email"
                    /> 
                     <Input
                    placeholder="Contraseña"
                    id=  "password"
                    name="password"
                    type="password"
                    /> 
                    <Btn
                    style="registrarme"
                    value="Registrarme"
                    type="Submit"
                    />
            </Formulario>
           
            </div>
       </div>  
       </>
    )
}

