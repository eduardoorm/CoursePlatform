import React from 'react'
import { DashNav } from '../components/DashNav'
import '../components/ComponentStyles/Dashboard.css'
import { DashColumnLeft } from '../components/DashColumnLeft'
import { DashHeader } from '../components/DashHeader'
import { DashhEditarCourse } from '../components/DashEditarCurso/DashEditarCourse'

export const DashEditarCurso = () => {
    return (
        <>
        <DashNav/>
         {/* CONTENEDOR DASHBOARD */}
         <div className="Dashaboard_Container">
                        {/* (COLUMNA IZQUIERDA) */}
                        <DashColumnLeft/>
                        {/* (COLUMNA DERECHA) */}
                      <div className="Dashboard-Column_2">
                          {/* /*DASHBOARD HEADER*/}
                            <div className="Dashboard-Preview">
                                <DashHeader 
                                icono={<i class="fas fa-book"></i>}
                                nombre="Cursos"
                                />
                            </div>
                          {/* /*CONTENIDO*/ }
                        <div className="Dashboard-Contenido">
                           <DashhEditarCourse/>
                        </div>
                    </div>
                 </div>
            
        </>
    )
}
