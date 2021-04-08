import { useState } from 'react';
import ComentarioRespuesta from './ComentarioRespuesta'
import './ComponentStyles/Comentarios.css'
import './ComponentStyles/Respuesta.css'
import {useFetchRespuestas} from '../hooks/useFetchRespuestas'
import { postRespuesta } from '../helpers/postRespuesta';
import { deleteComentario } from '../helpers/deleteComentario';
export default function Comentario(props) {
    const [responder,setResponder]       = useState(false)
    const [showRpta,setShowRpta]         = useState(false);
    const [respuestaTXT,setRespuestaTXT] = useState({});
    const {dataRespuesta:respuestas}     = useFetchRespuestas(props.id_comentario)
    const [elipsi, setElipsi] = useState(false);
    const hanldeResponder=()=>setResponder(true);
    const cancelarRespuesta =()=> setResponder(false);
    const OcultarRespuestas=()=>setShowRpta(false);
    const MostarRespuestas=async (e)=>setShowRpta(true);
                  
    const handleChange =(e)=>{
        setRespuestaTXT({
          ...respuestaTXT,
          id_comentario:props.id_comentario,
          [e.target.name]:e.target.value
        })
    }
    const enviarRespuesta= async(e)=>{
        e.preventDefault();
        postRespuesta(respuestaTXT)
    }

    const clickElipsi = ()=>{
        setElipsi(!elipsi)
    }

    const eliminarComentario =()=>{
       deleteComentario(props.id_comentario);
    }

    return(
  
        <div className="Comentario_container_item">
          {/* COMENTARIOS REALIZADOS */}
            <div className="comentario-realizado">
                <div className="datos_comentario">
                    <img 
                    src="/assets/img/perfil.png" 
                    alt="img-perfil" 
                    className="perfil-comentario"/>
                    <div className="">
                        <p>{props.nombre} {props.apellido}</p>
                        <p className="hace-dias">{props.fecha}</p>
                    </div> 
                </div>       
            
                <div className="eliminar_container">
                {(props.id_persona === props.id_persona_actual) &&
                  <button className="btn_elipsi" onClick={clickElipsi}><i className="fas fa-ellipsis-v"></i></button> 
                  }
                 
                   {elipsi && 
                      <button className="btn_eliminarComent" onClick={eliminarComentario}>
                         <i className="far fa-trash-alt"></i>
                         <p>Eliminar</p> 
                      </button> 
                    }
                 </div>    
            </div>

            <div className="comentario-realizado-txt">
                <p className="text-coment">{props.comentario}</p>
                {/* <button 
                    id="btn-like" 
                    data-id={id_comentario}
                    className="boton-coment">
                    <i className="fas fa-thumbs-up"></i>
                    <small className="cant-btn1">0</small>
                </button> */}
                {(!responder) && <button className="btn-reponder" onClick={hanldeResponder}>Responder</button>}
            </div>
        
        {/* ESCRIBIR Y ENVIAR RESPUESTA */}
        {(responder) &&
         <div className="comentarios-video">
            <div className="hacer-comentario">
               
                <img src="/assets/img/perfil.png" className="perfil-comentario"/>
                <form className="formulario-comentario" id="miForm" >
                    <input
                        type="text" 
                        placeholder="Escribe una respuesta..."
                        value={respuestaTXT.respuestaTXT}
                        name="respuesta" 
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
    }   
     {/* MOSTRAR Y OCULTAR CAMPO RESPUESTA */}
        {(showRpta) 
             ? 
            <button 
              onClick={OcultarRespuestas} 
              className="btn-respuesta">
              Ocultar {respuestas.length} respuestas
            </button> 
             : (respuestas.length>0) &&
             <button 
               onClick={MostarRespuestas} 
               className="btn-respuesta">
               Ver respuestas
             </button>
        } 
        {/* RESPUESTAS DEL COMENTARIO*/}
         {
            (respuestas.length === 0 && (showRpta))
            ?
            <p>cargando...</p>
            :
            (showRpta) &&
                respuestas.map( respuesta =>
                    <ComentarioRespuesta key={respuesta}  {...respuesta} id_persona_actual={props.id_persona_actual}/>  
                )
         }
    </div>
    )     
}