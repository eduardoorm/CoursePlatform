import React, {Component} from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom';
import {Btn} from './Button.js'
import {TitleIntesla} from '../elementos/Navbar-elementos'


class NavBar extends Component {
   render(){
       return(
        <>
        <nav>
        <div className="row">
            <Link to='/'><TitleIntesla>Intesla</TitleIntesla></Link>
                
                <ul className="main-nav">
                <Link to='/collections'><li>Cursos</li> </Link>
                    <li>
                        <div className="search">
                            <i className="fas fa-search"></i>
                            <p>Buscar cualquier cosa</p>
                        </div>
                    </li>
                    <Link to='/#'><li>Enseña en intesla</li></Link>
                    <li>
                    <Link to='/login'>
                        <Btn value="Iniciar Sesión" style="iniciar-sesion"/>
                    </Link>
                    </li>
                    <li>
                    <Link to='/register'>
                    <Btn value="Regístrate" style="registrarse"/>
                    </Link>
                    </li>      
                </ul> 
              </div>
            </nav>
        </>
       )
   }
}

export default NavBar;