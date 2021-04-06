import React from 'react'
import { DashNav } from '../components/DashNav'
import '../components/ComponentStyles/Dashboard.css'
import { DashColumnLeft } from '../components/DashColumnLeft'
import { DashHeader } from '../components/DashHeader'
import { DashEditarCate } from '../components/DashEditarCate'
import { DashEditarStudent } from '../components/DashEditarStudent/DashEditarStudent'

export const DashEditarEstudiante = () => {
    return (
        <>
        
        <DashNav/>
         {/*CONTENEDOR DASHBOARD */}
         <div className="Dashaboard_Container">
                        {/* (COLUMNA IZQUIERDA) */}
                        <DashColumnLeft/>
                        {/* (COLUMNA DERECHA) */}
                    <div className="Dashboard-Column_2">
                        {/* /*DASHBOARD HEADER*/}
                        <div className="Dashboard-Preview">
                            <DashHeader 
                            icono={<i className="fas fa-graduation-cap"></i>}
                            nombre="Estudiante"
                            />
                        </div>
                        {/* /*CONTENIDO*/ }
                        <div className="Dashboard-Contenido">
                          <DashEditarStudent/>
                        </div>
                    </div>
                 </div>
        </>
    )
}
