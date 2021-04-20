import React, { useState } from 'react'
import { DashNav } from '../components/DashNav'
import {deleteSeccion} from '../helpersAdmin/deleteSeccion'
import '../components/ComponentStyles/Dashboard.css'
import { DashColumnLeft } from '../components/DashColumnLeft'
import { DashHeader } from '../components/DashHeader'
import { DashConteDashboard } from '../components/DashConteDashboard'

import { useFetchgetSeccionPorCursoID } from '../hooksAdmin.js/useFetchgetSeccionPorCursoID'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { DashAddSection } from '../components/DashEditarSeccion/DashAddSection'
import { DashAddLeccion } from '../components/DashEditarLeccion.js/DashAddLeccion'
import { useFetchGetLecciones } from '../hooksAdmin.js/useFetchGetLecciones'
import { DashLeccion } from '../components/DashEditarLeccion.js/DashLeccion'

export const DashContenido = () => {
     const {id}=useParams();
     const [clickAddSeccion, setclickAddSeccion] = useState(false);
     const [clickAddLeccion, setclickAddLecciones] = useState(false)
     const {dataSeccion:secciones}=useFetchgetSeccionPorCursoID(id);
     const clickAddSecciones =()=>{
     return (setclickAddSeccion(!clickAddSeccion))
     }     
     const clickAddLecciones =()=>{
      return (setclickAddLecciones(!clickAddLeccion))
     }
       const deleteSecciones= (nombre,id)=>{
        if(window.confirm(`¿Seguro que quieres eliminar al modulo "${nombre}"?`)){
          window.location.reload();
           return deleteSeccion(id);
        }
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
                            btn="+ Agregar Categoria"
                            />
                        </div>
                        {/* /*CONTENIDO*/ }
                        <div className="Dashboard-Contenido">
                            <DashConteDashboard titulo="Sección Contenido" />
                            {clickAddSeccion || clickAddLeccion || 
                            <>
                            <Link to="/admin/cursos"> <button className="btn_volverCurso">Volver</button></Link> 
                            <button className="btn_addSeccion" onClick={clickAddSecciones}>+ Sección</button>
                            <button className="btn_addLeccion" onClick={clickAddLecciones}>+ Lección</button>
                            </> 
                              }
                         <div className="Secciones">
                            {clickAddSeccion 
                            ?
                            <DashAddSection/>
                            :
                            (clickAddLeccion)
                            ?
                            <DashAddLeccion/>
                            :               
                            secciones?.map((el,pos)=>
                                <div className="Container_Secciones" key={el.id_modulo}> 
                                  <div className="header_secciones">
                                    <h3>Sección {pos+1}</h3>
                                    <p>{el.nombre}</p>                               
                                    <div className="botones_Secciones">
                                    <Link to={`/admin/modulo/editar/${el.id_modulo}`}>
                                       <button className="btn-default">Editar Sección</button> 
                                     </Link>  
                                      <button className="btn-default" onClick={()=>{deleteSecciones(el.nombre,el.id_modulo)}}>Eliminar Sección</button>
                                    </div>        
                                  </div>
                                  <div>
                                      <DashLeccion id_modulo={el.id_modulo}/>
                                    </div>
                                </div>
                             )
                            }
                            </div>
                        </div>
                    </div>
                 </div>
        </>
    )
}
