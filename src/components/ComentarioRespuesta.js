import { useState } from "react";
import { deleteRespuesta } from "../helpers/deleteRespuesta";

export default function ComentarioRespuesta (props){
     const [elipsi, setElipsi] = useState(false);
     const eliminarRespuesta =()=>{
        deleteRespuesta(props.id_respuesta)
        props.dispatchAnswer({
          type: 'DEL_ANSWERS', payload: props.id_respuesta
        })
     }
     const clickElipsi = ()=>{
        setElipsi(!elipsi)
    }

    return(
    <div className="contenedor_respuesta">
          <div className="comentario-realizado">
               <div className="datos_comentario">
                  <img src="/assets/img/perfil.png" alt="img-perfil"className="perfil-comentario"/>
                  <div>
                    <p>{props.nombre} {props.apellido}</p>
                    <p className="hace-dias">{props.fecha}</p>
                  </div>  
                </div>  

                 <div className="eliminar_container">
                {(props.id_persona === props.id_persona_actual) &&
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
            <p className="text-coment">{props.respuesta}</p>
        </div>
     
    </div>
    )
}