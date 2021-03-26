export default function ComentarioRespuesta ({nombre,apellido,respuesta,fecha,comentarioID}){
    
    return(
    
    <div className="contenedor_respuesta">
     <div className="comentario-realizado">
       <div className="datos_comentario">
           <img src="/assets/img/perfil.png" alt="img-perfil"className="perfil-comentario"/>
           <div>
              <p>{nombre} {apellido}</p>
              <p className="hace-dias">{fecha}</p>
           </div>  
        </div>               
     </div>
     <div className="comentario-realizado-txt">
         <p className="text-coment">{respuesta}</p>
         {/* <button id="btn-like" data-id={comentarioID} className="boton-coment">
          <i className="fas fa-thumbs-up"></i><small className="cant-btn1">0</small></button> */}
     </div>
     </div>

    )
}