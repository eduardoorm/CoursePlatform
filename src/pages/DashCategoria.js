import React, { useState } from 'react'
import { DashDashboard } from '../components/DashDashboard'
import { DashNav } from '../components/DashNav'
import '../components/ComponentStyles/Dashboard.css'
import { DashColumnLeft } from '../components/DashColumnLeft'
import { DashHeader } from '../components/DashHeader'
import { DashConteDashboard } from '../components/DashConteDashboard'
import { DashAddCategoria } from '../components/DashEditarCategoria/DashAddCategoria'
import { DashMostrarCategoria } from '../components/DashEditarCategoria/DashMostrarCategoria'

export const DashCategoria = () => {
    const [clickAddCate, setclickAddCate] = useState(false)
    const clickAddCategoria =()=>{
         return (setclickAddCate(!clickAddCate))
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
                            nombre="Categorias"
                            btn="+ Agregar Categoria"
                            />
                        </div>
                        {/* /*CONTENIDO*/ }
                        <div className="Dashboard-Contenido">
                        <div className="dashboar_contenido_header">
                            <DashConteDashboard titulo="Seccion Categoria" btn="Agrega una nueva categoria"/>
                           {clickAddCate 
                            ?  
                            <button className="btn_header" onClick={clickAddCategoria}>Volver</button>
                            :  
                            <button className="btn_header" onClick={clickAddCategoria}>Agregar Categoria</button>}
                       </div> 
                            {clickAddCate
                             ? 
                            <DashAddCategoria/>
                             :
                             <>
                             {/* <div className="identi_categoria">
                             <p>ID</p>
                             </div> */}
                             <DashMostrarCategoria/>
                             </>
                             }
 
                        </div>
                    </div>
                 </div>
        </>
    )
}
