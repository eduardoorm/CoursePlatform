import React from 'react'
import Footer from '../components/Footer'
import  Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'
import { MiCurso } from '../components/MiCurso';
import { useFecthPersonaCurso } from '../hooks/useFetchPersonaCurso';

export const MisCursos = () => {
    const {dataCurso:cursos}= useFecthPersonaCurso();
    return (
      <>
      <Navbar/>
      {(cursos?.length===0)?
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
             </>  }
      </>
    )
}
