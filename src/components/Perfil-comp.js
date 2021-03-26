import React , {useState,useEffect} from 'react'
import { useFecthUsuario } from '../hooks/useFecthUsuario'
import { useFecthPersonaCurso } from '../hooks/useFetchPersonaCurso';
import './ComponentStyles/Perfil-comp.css'
import { MiCurso } from './MiCurso';
import PerfilEditar from './PerfilEditar'
import {Link} from 'react-router-dom'

export default function PerfilComp () {
   const[clickEditarPerfil,setEditarPerfil]=useState(false);
   const {data:user,loading} = useFecthUsuario();
   const {dataCurso:cursos}= useFecthPersonaCurso()
   const handlEditarPerfil = ()=>(clickEditarPerfil) ? setEditarPerfil(false) : setEditarPerfil (true)
       return(         
        <section className="perfil-estudiante">
             {
             clickEditarPerfil && 
              <button 
                className="volverPerfil" 
                onClick={()=>handlEditarPerfil(false)}>
                <i className="far fa-arrow-alt-circle-left fa-2x"></i>
              </button>
              } 

            <div className="perfil-estudiante-header">
                <div className="estudiante-header-item">
                    <img src="assets/img/perfil.png" alt="img-perfil"/>
                </div>
                <div className="estudiante-header-item">
                    <p>{user?.nombre||loading} {user?.apellido||loading}</p>
                    <p>{user?.email||loading}</p>
                    <button 
                        onClick={handlEditarPerfil} 
                        className="btn_editarPerfil">
                        {
                        (!clickEditarPerfil) && <p>Editar Perfil</p> 
                        }
                    </button>
                </div>
            </div>
            {(clickEditarPerfil)
             ? 
             <PerfilEditar/>  
             :
             (cursos?.length===0)?
              <div className="estudiante-SinCursos-container">
                <h3>Mis Cursos</h3>
                <div className="estudiante-misCursos">
                    <p>Aun no tienes cursos 🙁</p>
                 <Link to="/collections"><button className="btn-explorarCursos">Explorar Cursos</button></Link>  
                </div>
             </div>
          
             :
             <>
             <h2 className="misCursos_Titulo">Mis Cursos</h2>
              <div className="estudiante-misCursos-container">             
                    {cursos?.map(curso=><MiCurso key={curso} {...curso} />) }
                
              </div>
             </>  
            }   
        </section>    
       )
} 