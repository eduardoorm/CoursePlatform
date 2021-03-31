import React, {useState,useEffect} from 'react';
import './ComponentStyles/Navbar.css'
import {Link,useHistory, useParams} from 'react-router-dom';
import {Btn} from './Button.js'
import {TitleIntesla,NavbarRight} from '../elementos/Navbar-elementos'
import { Oferta } from './Oferta';
import {countdown,getFecha} from './Reloj'
import { useFecthUsuario } from '../hooks/useFecthUsuario';
export default function NavBar() {
     const[sesion,setSesion] = useState(false);
     const[clickPerfil,setClickPerfil] = useState(false);
     const history = useHistory();
     const{data}= useFecthUsuario();
     const handlPerfil = () =>{
         (clickPerfil) ?   setClickPerfil(false) : setClickPerfil(true);
     }

     useEffect(()=>{
        if(localStorage.getItem("token")){
            return setSesion(true);
        }
        countdown(getFecha(), "Feliz cumpleaños");
        
     })
     const handleCerrarSesion =()=>{
         localStorage.clear();
         setClickPerfil(false);
         history.replace("/login");
         return setSesion(false);
     }
  
       return(
       <>
        <Oferta/>
        <nav id={"navBar"}>
        <div className="row">
            <Link to='/'><TitleIntesla><span className="li_navbar">Intesla Education</span></TitleIntesla></Link>
                <ul className="main-nav">  
                <Link ><li id="li_navbar">Enseña en Intesla</li> </Link>
                <Link to='/collections'><li id="li_navbar">Cursos</li> </Link>          
                    {sesion ? 
                       <NavbarRight>
                           <li>
                               <div className="contain__showPefil">           
                                  <Btn 
                                  onClick={handlPerfil} 
                                  value={
                                  <>
                                  <img src="/assets/img/perfil.png" 
                                  className="img__perfil"
                                  /> 
                                  <i className="fas fa-chevron-down" id="buton__perfil"></i>
                                  </>
                                  }
                                  style="btn_mostrarPerfil"/>
                               </div>

                               {clickPerfil &&
                                <ul className="lista__miPerfil">
                                  <li>
                                    <Link
                                     to="/Perfil">
                                     <button className="btn_verPerfil" onClick={()=>setClickPerfil(false)}>Mi perfil</button> 
                                     </Link>
                                  </li>
                                  <li id="id_liNav">
                                    <Link to={`/certificados/${data?.id_persona}`}>Mis Certificados </Link> 
                                  </li> 
                                  <li id="id_liNav">
                                      <Link>Mis Cursos </Link> 
                                  </li>
                                  <li id="li__cerrarSesion">
                                    <Btn 
                                        value={<><i className="fas fa-sign-out-alt"></i><span>Cerrar Sesión</span></>} 
                                        style="btn__cerrarSesion"  
                                        onClick={handleCerrarSesion}/>
                                  </li> 
                                </ul>    
                               }     
                           </li>          
                        </NavbarRight>
                   :
                        <NavbarRight>
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
                        </NavbarRight>
                }      
 
                </ul> 
              </div>
            </nav>
          </>
       )
}

