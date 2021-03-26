import React, { useState } from 'react'
import { DashDashboard } from '../components/DashDashboard'
import { DashNav } from '../components/DashNav'
import '../components/ComponentStyles/Dashboard.css'
import { DashColumnLeft } from '../components/DashColumnLeft'
import { DashHeader } from '../components/DashHeader'
import { DashConteDashboard } from '../components/DashConteDashboard'
import { DashMostrarCertificados } from '../components/DashEditarCertificados/DashMostrarCertificados'
import { DashAddCertificado } from '../components/DashEditarCertificados/DashAddCertificado'
export const DashCertificado = () => {
    const [clickAddCertificado, setclickAddCertificado] = useState(false)
    const clickAddCertificados =()=>{
         return (setclickAddCertificado(!clickAddCertificado))
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
                            icono={<i class="fas fa-certificate"></i>}
                            nombre="Certificados"
                            btn="+ Agregar Certificado"
                            />
                        </div>
                        {/* /*CONTENIDO*/ }
                        <div className="Dashboard-Contenido">
                          <div className="dashboar_contenido_header">
                                <DashConteDashboard titulo="Seccion Certificado" btn="Agrega Certificado"/>
                                {clickAddCertificado 
                                ?  
                                <button className="btn_header" onClick={clickAddCertificados}>Volver</button>
                                :  
                                <button className="btn_header" onClick={clickAddCertificados}>Agregar Certificado</button>}
                          </div>
                            {clickAddCertificado
                             ? 
                             <DashAddCertificado/>
                             :
                             <DashMostrarCertificados/>
                             }

                        </div>
                    </div>
                 </div>
        </>
    )
}
