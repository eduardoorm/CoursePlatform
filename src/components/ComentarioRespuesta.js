import { useState } from "react";
import { deleteRespuesta } from "../helpers/deleteRespuesta";

export default function ComentarioRespuesta ({id_respuesta,imageUrl,dispatchAnswer,nombre,apellido,fecha,id_persona,id_persona_actual,respuesta}){
     const [elipsi, setElipsi] = useState(false);
     const eliminarRespuesta =()=>{
        deleteRespuesta(id_respuesta)
        dispatchAnswer({
          type: 'DEL_ANSWERS', payload:id_respuesta
        })
     }
     const clickElipsi = ()=>{
        setElipsi(!elipsi)
    }

    return(
    <div className="contenedor_respuesta">
          <div className="comentario-realizado">
               <div className="datos_comentario">
                  <img src={ imageUrl||' /assets/img/perfil.png'} alt="img-perfil"className="perfil-comentario"/>
                  <div>
                    <p>{nombre} {apellido}</p>
                    <p className="hace-dias">{fecha}</p>
                  </div>  
                </div>  

                 <div className="eliminar_container">
                {(id_persona === id_persona_actual) &&
                  <button className="btn_elipsi" onClick={clickElipsi}><i className="fas fa-ellipsis-v"></i></button> 
                  }
                 
                   {elipsi && 
                      <button className="btn_eliminarComent" onClick={eliminarRespuesta}>
                         <i className="far fa-trash-alt"></i>
                         <p>Eliminar</p> 
                      </button> 
                    }
         </div>                 
    </div>

        <div className="comentario-realizado-txt">
            <p className="text-coment">{respuesta}</p>
        </div>
     
    </div>
    )
}