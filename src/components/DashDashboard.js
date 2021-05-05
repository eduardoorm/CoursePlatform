import React from 'react'
import { DashHeader } from './DashHeader'
import { DashConteDashboard } from './DashConteDashboard'
import { DashColumnLeft } from './DashColumnLeft'
import { DashNav } from './DashNav'
import './ComponentStyles/Dashboard.css'
export const DashDashboard = () => {
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
                            icono={<i className="fas fa-tachometer-alt"></i>}
                            nombre="Dashboard"
                            />
                        </div>
                        {/* /*CONTENIDO*/ }
                        <div className="Dashboard-Contenido">
                            <div className="Dashboar_container_bienvenido">
                            <DashConteDashboard titulo="Bienvenido 😀 "/>
                            </div>
                        </div>
                    </div>
                 </div>
        </>
    )
}
