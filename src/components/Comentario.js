import { useReducer, useState } from 'react';
import ComentarioRespuesta from './ComentarioRespuesta'
import './ComponentStyles/Comentarios.css'
import './ComponentStyles/Respuesta.css'
import {useFetchRespuestas} from '../hooks/useFetchRespuestas'
import { postRespuesta } from '../helpers/postRespuesta';
import { deleteComentario } from '../helpers/deleteComentario';
import { UseFecthUsuario } from '../hooks/useFecthUsuario';
import { AnswerWrite } from './AnswerWrite';

export default function Comentario(props) {
    const [responder,setResponder]       = useState(false)
    const [showRpta,setShowRpta]         = useState(false);
    const [respuestaTXT,setRespuestaTXT] = useState({});
    const {data:usuario} =UseFecthUsuario();

    const {nombre,apellido,id_persona}=usuario;
    const d= document;
    const inputAnswer= d.getElementById('inputAnswer')
      /*¨RESPUESTAS ESTADO*/
     const [answers_list, dispatchAnswer] = useReducer((state,action)=>{
    switch (action.type) {
      case 'LOAD_ANSWERS':
        return action.payload
      case 'DEL_ANSWERS':{
        const id=action.payload;
        const newState= state.filter(el=>el.id_respuesta !== id)  //aqui estoy eliminado la respuesta
        return newState
      }
      case 'ADD_ANSWERS':{
      
        return [...state,action.payload]
      }
      default:
        return state
    }
     })

  
    useFetchRespuestas(props.id_comentario,dispatchAnswer);
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
        const {id_respuesta} = await postRespuesta(respuestaTXT)
        const date = new Date(Number(Date.now())); 
        const fecha = '12/12/12';
        
        const payload ={
            respuesta:respuestaTXT.respuesta,
            id_respuesta,
            id_persona,
            apellido,
            nombre,
            fecha,
            imageUrl:usuario?.imageUrl,
        }
        dispatchAnswer({
            type:'ADD_ANSWERS',payload
        })
        inputAnswer.value=""
        setResponder(false)
    }

    const clickElipsi = ()=>{
        setElipsi(!elipsi)
    }
    
    const eliminarComentario =()=>{
       deleteComentario(props.id_comentario);
       props.dispatch({
           type: 'DEL_COMMENT', payload: props.id_comentario
       })
    }

    return(
        <div  className="Comentario_container_item">
          {/* COMENTARIOS REALIZADOS */}
            <div className="comentario-realizado">
                <div className="datos_comentario">
                    <img 
                      src={props.imageUrl||"/assets/img/perfil.png"}
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
                {(!responder) && <button className="btn-reponder" onClick={hanldeResponder}>Responder</button>}
            </div>
        
        {/* ESCRIBIR Y ENVIAR RESPUESTA */}
        {(responder) &&
           <AnswerWrite 
           handleChange ={handleChange}
           imageUrl= {usuario?.imageUrl}
           respuestaTXT={respuestaTXT}
           cancelarRespuesta={cancelarRespuesta}
           enviarRespuesta={enviarRespuesta}
           />
    }   
     {/* MOSTRAR Y OCULTAR CAMPO RESPUESTA */}
        {(showRpta) 
             ? 
            <button 
              onClick={OcultarRespuestas} 
              className="btn-respuesta">
              Ocultar {answers_list.length} respuestas
            </button> 

             : 
             (answers_list?.length>0) &&
             <button 
               onClick={MostarRespuestas} 
               className="btn-respuesta">
               Ver respuestas
             </button>
        } 
        {/* RESPUESTAS DEL COMENTARIO*/}
         {
            (answers_list === 0 && (showRpta))
            ?
            <p>cargando...</p>
            :
            (showRpta) &&
                answers_list.map( respuesta =>
                    <ComentarioRespuesta
                      key={respuesta.id_respuesta}  
                      dispatchAnswer={dispatchAnswer}
                      {...respuesta}
                      id_persona_actual={props.id_persona_actual}
                      />  
                )
         }
    </div>
    )     
}