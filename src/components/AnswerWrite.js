import React from 'react'

export const AnswerWrite = ({handleChange,respuestaTXT,cancelarRespuesta,enviarRespuesta}) => {
    return (
        <div className="comentarios-video">
            <div className="hacer-comentario">
               
                <img src="/assets/img/perfil.png" className="perfil-comentario"/>
                <form className="formulario-comentario" id="miForm" >
                    <input
                        type="text" 
                        placeholder="Escribe una respuesta..."
                        name="respuesta" 
                        id="inputAnswer"
                        onChange={handleChange} 
                        className="inputComentario"
                    /> 
                    <div className="btn-comentarios">
                        <button className="btn cancelar" type="button" onClick={cancelarRespuesta}>Cancelar</button>
                        <button className="btn comentar" type="submit" onClick={enviarRespuesta} >Responder</button>
                    </div>
                </form>
            </div>   
          </div>
    )
}
