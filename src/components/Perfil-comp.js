import React , {Component} from 'react'
import './Perfil-comp.css'
import Input from './Input';
import {Formulario} from '../elementos/Formularios'
import {Btn} from './Button'
import EditarPerfil from './EditarPerfil-comp'
export default class PerfilComp extends Component {
  
    constructor(props){
       super(props)
   }

   render(){
       return(
               
        <section class="perfil-estudiante">

            <div class="perfil-estudiante-header">
                <div class="estudiante-header-item">
                    <img src="assets/img/perfil.png" alt="img-perfil"/>
                </div>
                
                <div class="estudiante-header-item">
                    <p>Eduardo Ormeño Meneses</p>
                    <p>eduardoorm79@gmail.com</p>
                    <p>Editar Perfil</p>
                </div>
            </div>

            <div class="estudiante-misCursos-container">
                <h3>Mis Cursos</h3>
                <div class="estudiante-misCursos">
                    <p>Aun no tienes cursos :( </p> <button class="btn-explorarCursos"><p>Explorar Cursos</p></button>
                </div>
            </div>
            <EditarPerfil/>
        </section>
   
            
       )
   }

} 