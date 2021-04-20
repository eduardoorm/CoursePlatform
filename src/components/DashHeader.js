import React from 'react'

export const DashHeader = ({nombre,icono,btn}) => {

    return (
        <div className="Header_Titulo">
            <div className="Header_Titulo_item">
              {icono}  <p>{nombre}</p> 
            </div>
            <div className="Header_Titulo_item">
            </div>      
        </div>
    )
}
