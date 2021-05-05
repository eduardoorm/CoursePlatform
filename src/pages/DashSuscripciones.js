import React, { useState } from 'react'
import { DashDashboard } from '../components/DashDashboard'
import { DashNav } from '../components/DashNav'
import '../components/ComponentStyles/Dashboard.css'
import { DashColumnLeft } from '../components/DashColumnLeft'
import { DashHeader } from '../components/DashHeader'
import { DashConteDashboard } from '../components/DashConteDashboard'
import { DashSubs } from '../components/DashSuscripciones/DashSubs'
import { DashMostrarReportes } from '../components/DashSuscripciones/DashMostrarReportes'

export const DashSuscripciones = () => {
 
      
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
                            icono={<i className="far fa-money-bill-alt"></i>}
                            nombre="Suscripciones"
                            />
                        </div>
                        {/* /*CONTENIDO*/ }
                        <div className="Dashboard-Contenido">
                        <div className="dashboar_contenido_header">
                            <DashConteDashboard titulo="Seccion Reportes" />
                        </div>  
                            <DashSubs/>
                        </div>
                    </div>
          </div>
        </>
    )
}