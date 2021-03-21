import React, {Component} from 'react';
import './ComponentStyles/Log.css'
import  {Formulario} from '../elementos/Formularios'
import Input from './Input'
import { Redirect,Route } from 'react-router';
import {withRouter} from 'react-router-dom'
import GoogleLogin from 'react-google-login';
class Log extends Component {
    
    state={
        form:{
            email:'',
            password:'',
        },
        sesion:false,
    }

    
    handleChange = e =>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        })
    }

    handleSubmit = async e =>{
        e.preventDefault();
        try {
            let config ={
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(this.state.form)
            }
       
            let res = await fetch('http://localhost:3001/loginUser',config)
            let token = await res.json();

             if(res.ok){
                localStorage.setItem("token",JSON.stringify(token));
              
             }else{
                 alert("DATOS INVALIDOS")
             }

             if(localStorage.getItem("token")){
              this.setState({
                  redirect:true,
              })
             }
    
        } catch (error) {
            /*CAMBIAR*/
            console.log(error)
        }
    }

    //localStorage solo almacena strings, la otra manera es meterlo dentrod e un json.stringyfy()

    render(){
       
        return(
            <>
            { this.state.redirect ? (<Redirect push to="/"/>) : null }
            <div className="formulario-contenedor">
            <div className="form-titulo">
                <h1>Bienvenido</h1>
            </div>
          
            <div className="form-post">
                <Formulario onSubmit = {this.handleSubmit} onChange={this.handleChange}>
                    <Input
                     type="email"
                     name="email" 
                     id="email" 
                     placeholder="Correo electrónico *"
                    />
                    <Input
                     type="password"
                     name="password" 
                     id="password" 
                     placeholder="Contraseña *"
                    />
                    <Input
                    type="submit"
             
                    value="Iniciar Sesión"
                    id="started"
                    >
                    </Input>
                    
                  
                </Formulario>          
            </div>

            <div className="register-down">
                <p className="google"><a href="Google" className="link-google">Olvide mi contraseña</a></p> 
                <p className="privacy-terms">¿No tienes una cuenta? <a href="#" className="links-terms">Regístrate</a></p>   
            </div>
            <br/>
            <GoogleLogin
                clientId="593174414261-1gu1nc4svuu26erj483ptivnt56i5ab2.apps.googleusercontent.com"
                buttonText="Ingresar"
                // onSuccess={respuestaGoogle}
                // onFailure={respuestaGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
        </>
        )
    }
}

export default Log;