import React from 'react'
import './ComponentStyles/Dashboard.css'
export const DashSections = ({nombre,icono}) => {

    return (
        <div className="Dash_Section">
            <div className="Dash_Section_Item">
            {icono} <p>{nombre}</p> 
            </div>     
        </div>  
    )
}
