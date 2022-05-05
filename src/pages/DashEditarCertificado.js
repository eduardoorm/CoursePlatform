import React from 'react'
import { DashNav } from '../components/DashNav'
import '../components/ComponentStyles/Dashboard.css'
import { DashColumnLeft } from '../components/DashColumnLeft'
import { DashHeader } from '../components/DashHeader'
export const DashEditarCertificado = () => {
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
                                icono={<i className="fas fa-certificate"></i>}
                                nombre="Editar Certificado"
                                />
                            </div>
                          {/* /*CONTENIDO*/ }
                        <div className="Dashboard-Contenido">
                           <p>Esto se eliminó</p>
                        </div>
                    </div>
                 </div>
            
        </>
    )
}
