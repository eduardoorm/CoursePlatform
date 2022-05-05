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
         <div className="dashboard__container">
                        <DashColumnLeft/>
                    <div className="dashboard__column2">
                        <div className="dashboard__preview">
                            <DashHeader 
                            icono={<i className="fas fa-puzzle-piece"></i>}
                            nombre="Courses"
                            />
                        </div>
                        <div className="dashboard__content">
                            <DashEditarCate/>
                        </div>
                    </div>
                 </div>
        </>
    )
}