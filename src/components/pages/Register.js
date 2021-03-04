import React, {Component} from 'react';
import Input from '../Input';
import styled from 'styled-components'
import {Formulario} from '../../elementos/Formularios'
import {Btn} from '../Button'

function Register (){
    return(
        <div className="formulario-contenedor">
            <div className="form-titulo">
                    <h1>Inscríbete y comienza a aprender.</h1> 
            </div>
            <div className="form-post">

            <Formulario id="form" method="POST" action="/userFormPost">
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
                    <Input
                     placeholder="Confirmar Contraseña"
                     id=  "confirmPassword"
                     name="confirmPassword"
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
    )
}

export default Register;
