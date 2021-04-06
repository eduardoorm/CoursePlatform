import React, { useState } from 'react'
import { DashDashboard } from '../components/DashDashboard'
import { DashNav } from '../components/DashNav'
import '../components/ComponentStyles/Dashboard.css'
import { DashColumnLeft } from '../components/DashColumnLeft'
import { DashHeader } from '../components/DashHeader'
import { DashConteDashboard } from '../components/DashConteDashboard'
import { DashAddCurso } from '../components/DashEditarCurso/DashAddCurso'
import { DashMostrarCurso } from '../components/DashEditarCurso/DashMostrarCurso'

export const DashCursos = () => {
    const [clickAddCurso, setclickAddCurso] = useState(false)
    const clickAddCursos =()=>{
         return (setclickAddCurso(!clickAddCurso))
      }
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
                            icono={<i className="fas fa-book"></i>}
                            nombre="Cursos"
                            />
                        </div>
                        {/* /*CONTENIDO*/ }
                        <div className="Dashboard-Contenido">
                            <div className="dashboar_contenido_header">
                                <DashConteDashboard titulo="Seccion Cursos"/>
                                {clickAddCurso
                                ?  
                                <button className="btn_header" onClick={clickAddCursos}>Volver</button>
                                :  
                                <button className="btn_header" onClick={clickAddCursos}>Agregar Curso</button>}
                           </div> 
                            {clickAddCurso
                             ? 
                            <DashAddCurso/>
                             :
                             <DashMostrarCurso/>
                             }
                             
                        </div>
                    </div>
                 </div>
        </>
    )
}