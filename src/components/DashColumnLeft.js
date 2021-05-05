import React from 'react'
import {Link} from 'react-router-dom'
import { DashSections } from './DashSections'
import './ComponentStyles/Dashboard.css'
export const DashColumnLeft = () => {
    return (
        <div className="Dashboard-Column_1"> 
                      <div className="Dashboard_Sections">
                        <div className="dash_section_perfil">
                          <img src="/assets/img/perfil.png" alt="img-admin"/>
                          <p>Erick Romucho</p>
                        </div>      
                          <p className="txt_Navegacion">Navegación</p>
                          <div className="Dash_List_Items">
                            <Link to="/admin/dashboard">
                            <DashSections 
                            icono={<i className="fas fa-tachometer-alt"></i>} 
                            nombre="Dashboard"/> 
                            </Link>  
                            <Link to="/admin/categorias">  
                            <DashSections 
                            icono={<i className="fas fa-puzzle-piece"></i>}   
                            nombre="Categorias"/>
                            </Link> 
                            <Link to="/admin/profesor">  
                            <DashSections 
                            icono={<i className="fas fa-puzzle-piece"></i>}   
                            nombre="Profesor"/>
                            </Link> 
                            <Link to="/admin/cursos">   
                            <DashSections 
                              icono={<i className="fas fa-book"></i>}           
                              nombre="Cursos"/>
                            </Link> 
                            <Link to="/admin/estudiantes">
                            <DashSections 
                              icono={<i className="fas fa-graduation-cap"></i>} 
                              nombre="Estudiantes"/>
                            </Link>
                            <Link to="/admin/suscripciones">
                            <DashSections 
                              icono={<i className="far fa-money-bill-alt"></i>} 
                              nombre="Suscripciones"/>
                            </Link>  
                            <Link to="/admin/certificados">
                            <DashSections 
                              icono={<i className="fas fa-certificate"></i>} 
                              nombre="Certificados"/>
                            </Link>            
                          </div>
                      </div>
                   </div>
    )
}
