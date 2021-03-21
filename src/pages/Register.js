import React, {Component} from 'react';
import Input from '../components/Input';
import styled from 'styled-components'
import {Formulario} from '../elementos/Formularios'
import {Btn} from '../components/Button'
import {Redirect} from 'react-router-dom';
import GoogleLogin from 'react-google-login';
class Register extends Component{
     constructor(props){
         super(props);
         this.respuestaGoogle = this.respuestaGoogle.bind(this);
     }
    state={
        form:{
            apellidos:'',
            nombre:'',
            email:'',
            password:'',
        },
        register:false
    }

    handleChange = e =>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        })
    }

    handleSubmit = async(e) =>{
       e.preventDefault()
       console.log(this.state)
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
         console.log("esta es al respuesta",res);
         let json = await (res);
         if(res.ok){
            this.setState({
                register:true,
            })
         }else{
             console.log("No se pudo registar");
         }
        
       } catch (error) {
           
       }
    }
    
    respuestaGoogle =(respuesta)=>{
       console.log(respuesta);
    }

   render(){
     const {register} = this.state
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
                // onSuccess={respuestaGoogle}
                // onFailure={respuestaGoogle}
                cookiePolicy={'single_host_origin'}
            />
            <br/> <br/>
            <Formulario id="form" onChange={this.handleChange} onSubmit={this.handleSubmit}>
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
    )}
}

export default Register;
