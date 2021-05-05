import React from 'react'
import { DashNav } from '../DashNav'
import '../ComponentStyles/Dashboard.css'
import { DashColumnLeft } from '../DashColumnLeft'
import { DashHeader } from '../DashHeader'
import { DashEditarCate } from '../DashEditarCate'

export const DashEditarCategoria = () => {
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
                            nombre="Cursos"
                            />
                        </div>
                        {/* /*CONTENIDO*/ }
                        <div className="Dashboard-Contenido">
                            <DashEditarCate/>
                        </div>
                    </div>
                 </div>
        </>
    )
}