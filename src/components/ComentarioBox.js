import React, { useContext } from 'react'
import { Context } from '../store/UseContextComment'
import Comentario from './Comentario'

export const ComentarioBox = ({comentarios,id_persona_actual}) => {
    const {comment}= useContext(Context)
  //y si bro desde video-comp alli esta todo los componentes de esa pagina
    return (
        <div className="container_comentario">
            {comentarios?.length !== 0
                &&
                comentarios?.map(comentario =>
                    <Comentario 
                        key={comentario.coment}
                        {...comentario} 
                        id_persona_actual={id_persona_actual}
                        />           
                )  
            }  
        </div>  
    )
}
