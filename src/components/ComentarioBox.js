import React from 'react'
import Comentario from './Comentario'

export const ComentarioBox = ({comentarios,id_persona_actual, dispatch}) => {
    return (
        <div className="container_comentario">
            {comentarios?.length !== 0
                &&
                comentarios?.map(comentario =>
                    <Comentario 
                        key={comentario.id_comentario}
                        {...comentario} 
                        id_persona_actual={id_persona_actual}
                        dispatch={dispatch}
                        />           
                )  
            }  
        </div>  
    )
}
