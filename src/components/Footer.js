import React, {Component} from 'react';
import './ComponentStyles/Footer.css'

class Footer extends Component{
    render(){
        return( 
        <footer>
            <hr/>
             <div className="fo-container">
                <div className="fo-item-up">
                    <div className="fo-item-up-1">
                       <p>Contenido</p>
                        <a href="#">Enseña en Intesla</a> 
                        <a href="#">¿Quienes somos?</a>
                    </div>
                    <div className="fo-item-up-1">
                       <p>Cursos</p>
                        <a href="#">Ponte en contacto con nosotros</a>
                        <a href="#">Política de Privacidad</a>
                    </div>    
                    <div className="fo-item-up-1">
                        <p>Legal</p>
                        <a href="#">Términos y condiciones del servicio</a> 
                    </div>       
                </div>
                   <div className="fo-item-down">
                       <h2>INTESLA</h2>
                       <p>@2021 Intesla, Inc.</p>
                   </div>
              </div>
        </footer>
        )
    } 
}
export default Footer;