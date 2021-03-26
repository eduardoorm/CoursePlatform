import React from 'react'
import { useFetchGetSuscripciones } from '../../hooksAdmin.js/useFetchGetSuscripciones'

export const DashSubs = () => {
    const {dataSuscripciones: suscripciones} = useFetchGetSuscripciones();
    return (
        <div className="suscripciones_container">
            {suscripciones.map((el,pos)=>
                <div className="suscripciones_item">
                  <p>{pos+1}</p>
                  <p>{el.nombre_persona}</p>
                  <p>Nombre Curso</p>
                  <p>Precio</p>
                </div>  
                )}
        </div>
    )
}
