import { useState } from 'react';
import ComentarioRespuesta from './ComentarioRespuesta'
import './ComponentStyles/Comentarios.css'
import './ComponentStyles/Respuesta.css'
import {useFetchRespuestas} from '../hooks/useFetchRespuestas'
import { postRespuesta } from '../helpers/postRespuesta';
export default function Comentario({id_comentario,id_persona,id_curso,id_video,comentario,fecha,likes,nombre,apellido}) {
    const [responder,setResponder]       = useState(false)
    const [showRpta,setShowRpta]         = useState(false);
    const [respuestaTXT,setRespuestaTXT] = useState({});
    const {dataRespuesta:respuestas}     = useFetchRespuestas(id_comentario)
    
    const hanldeResponder=()=>setResponder(true);
    const cancelarRespuesta =()=> setResponder(false);
    const OcultarRespuestas=()=>setShowRpta(false);
    const MostarRespuestas=async (e)=>setShowRpta(true);

    const handleChange =(e)=>{
        setRespuestaTXT({
          ...respuestaTXT,
          id_comentario:id_comentario,
          [e.target.name]:e.target.value
        })
    }
    const enviarRespuesta= async(e)=>{
        e.preventDefault();
        postRespuesta(respuestaTXT)
    }

    return(
        <div className="">
          {/* COMENTARIOS REALIZADOS */}
            <div className="comentario-realizado">
                <img 
                src="/assets/img/perfil.png" 
                alt="img-perfil" 
                className="perfil-comentario"/>
                <div>
                    <p>{nombre} {apellido}</p>
                    <p className="hace-dias">{fecha}</p>
                </div>              
            </div>
            <div className="comentario-realizado-txt">
                <p className="text-coment">{comentario}</p>
                <button 
                    id="btn-like" 
                    data-id={id_comentario}
                    className="boton-coment">
                    <i className="fas fa-thumbs-up"></i>
                    <small className="cant-btn1">0</small>
                </button>
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
                    <ComentarioRespuesta key={respuesta}  {...respuesta}/>  
                )
         }
    </div>
    )     
}