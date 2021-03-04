import React, {Component} from 'react';
import './Log.css';
import  {Formulario} from '../elementos/Formularios'
import Input from './Input'

class Log extends Component {
    render(){
        return(
            <div className="formulario-contenedor">

            <div className="form-titulo">
                <h1>Bienvenido</h1>
            </div>

            <div className="form-post">
                <Formulario method="POST"  action="/loginUser">
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
        </div>
        )
    }
}

export default Log;