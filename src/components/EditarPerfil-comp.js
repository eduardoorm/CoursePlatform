import React, {Component} from 'react';
import Input from './Input';
import styled from 'styled-components'
import {Formulario} from '../elementos/Formularios'
import {Btn} from './Button'

function EditarPerfil (){
    return(
        <div className="formulario-contenedor">
            <div className="form-titulo">
                    <h1>Tus datos</h1> 
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
                    <p>Cambiar Contraseña</p>
                    
                      <Btn
                    style="registrarme"
                    value="Guardar cambios"
                    type="Submit"
                    />
            </Formulario>
           
            </div>
       </div>  
    )
}

export default EditarPerfil;
