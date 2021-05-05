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

export const DashProfesor = () => {
    const [clickAddProfe, setclickAddProfe] = useState(false)
    const clickAddProfesor =()=>{
         return (setclickAddProfe(!clickAddProfe))
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
                            icono={<i className="fas fa-puzzle-piece"></i>}
                            nombre="Profesor"
                            btn="+ Agregar Profesor"
                            />
                        </div>
                        {/* /*CONTENIDO*/ }
                        <div className="Dashboard-Contenido">
                        <div className="dashboar_contenido_header">
                            <DashConteDashboard titulo="Seccion Profesores" btn="Agrega un nuevo profesor"/>
                           {clickAddProfe 
                            ?  
                            <button className="btn_header" onClick={clickAddProfesor}>Volver</button>
                            :  
                            <button className="btn_header" onClick={clickAddProfesor}>Agregar Profesor</button>}
                       </div> 
                            {clickAddProfe
                             ? 
                            <DashAddProfesor/>
                             :
                             <>
                             {/* <div className="identi_categoria">
                             <p>ID</p>
                             </div> */}
                             <DashMostrarPofesor/>
                             </>
                             }
 
                        </div>
                    </div>
                 </div>
        </>
    )
}
