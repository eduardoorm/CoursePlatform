import React, { useState } from 'react'
import { DashDashboard } from '../components/DashDashboard'
import { DashNav } from '../components/DashNav'
import '../components/ComponentStyles/Dashboard.css'
import { DashColumnLeft } from '../components/DashColumnLeft'
import { DashHeader } from '../components/DashHeader'
import { DashConteDashboard } from '../components/DashConteDashboard'
import { DashAddCategoria } from '../components/DashEditarCategoria/DashAddCategoria'
import { DashMostrarCategoria } from '../components/DashEditarCategoria/DashMostrarCategoria'
import { DashMostrarPofesor } from '../components/DashEditarProfesor/DashMostrarPofesor'
import { DashAddProfesor } from '../components/DashEditarProfesor/DashAddProfesor'
import { DashMostrarReportes } from '../components/DashSuscripciones/DashMostrarReportes'

export const DashReportes = () => {
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
                            icono={<i className="fas fa-puzzle-piece"></i>}
                            nombre="Reportes"
                            />
                        </div>
                        {/* /*CONTENIDO*/ }
                        <div className="Dashboard-Contenido">
                        <div className="dashboar_contenido_header">
                            <DashConteDashboard titulo="Seccion Reportes" />
                       </div> 
                           <DashMostrarReportes/>
                        </div>
                    </div>
                 </div>
        </>
    )
}
