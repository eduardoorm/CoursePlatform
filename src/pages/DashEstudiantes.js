import React, { useState } from 'react'
import { DashDashboard } from '../components/DashDashboard'
import { DashNav } from '../components/DashNav'
import '../components/ComponentStyles/Dashboard.css'
import { DashColumnLeft } from '../components/DashColumnLeft'
import { DashHeader } from '../components/DashHeader'
import { DashConteDashboard } from '../components/DashConteDashboard'
import { DashAddStudent } from '../components/DashEditarStudent/DashAddStudent'
import { DashMostarStudent } from '../components/DashEditarStudent/DashMostarStudent'

export const DashEstudiantes = () => {
    const [clickAddStudent, setclickAddStudent] = useState(false)
    const clickAddStudents =()=>{
         return (setclickAddStudent(!clickAddStudent))
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
                            icono={<i class="fas fa-graduation-cap"></i>}
                            nombre="Estudiantes"
                            />
                        </div>
                        {/* /*CONTENIDO*/ }
                        <div className="Dashboard-Contenido">
                        <div className="dashboar_contenido_header">
                            <DashConteDashboard titulo="Seccion Estudiantes" btn="Agregar estudiante"/>
                           {clickAddStudent
                            ?  
                            <button className="btn_header" onClick={clickAddStudents}>Volver</button>
                            :  
                            <button className="btn_header" onClick={clickAddStudents}>Agregar Estudiante</button>}
                        </div>  
                           {clickAddStudent
                             ? 
                            <DashAddStudent/>
                             :
                             <DashMostarStudent/>
                             }

                        </div>
                    </div>
                 </div>
        </>
    )
}