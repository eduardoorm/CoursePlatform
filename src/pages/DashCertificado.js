import React, { useState } from 'react'
import { DashDashboard } from '../components/DashDashboard'
import { DashNav } from '../components/DashNav'
import '../components/ComponentStyles/Dashboard.css'
import { DashColumnLeft } from '../components/DashColumnLeft'
import { DashHeader } from '../components/DashHeader'
import { DashConteDashboard } from '../components/DashConteDashboard'
import { Link } from 'react-router-dom'
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
                            icono={<i className="fas fa-certificate"></i>}
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
                               <Link to="/admin/certificados"><button className="btn_header" onClick={clickAddCertificados}>Volver</button> </Link> 
                                :  
                                <button className="btn_header" onClick={clickAddCertificados}>Agregar Certificado</button>}
                          </div>
                            {clickAddCertificado
                             ? 
                             <p> this was delete</p>
                             :
                             <p> this was delete</p>
                             }

                        </div>
                    </div>
                 </div>
        </>
    )
}
