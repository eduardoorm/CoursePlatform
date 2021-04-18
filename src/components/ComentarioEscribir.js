import { useEffect, useState,useContext } from 'react';
import { useParams } from 'react-router';
import { postComentario } from '../helpers/postComentario';
import { useFecthCursoID } from '../hooks/useFecthCurso';
import './ComponentStyles/Comentarios.css'
/** context*/
import ContextComment, { Context } from '../store/UseContextComment';

export default function ComentarioEscribir({cantidad,ruta_video,id_curso}) {
    const {setComment,comment} = useContext(Context)
    
    const [txtComment, setTxComment] = useState({})
    const [estadoComent,setEstadoComent] = useState(false);
    const handleChange =(e)=>{
        setTxComment({
          ...txtComment,
          [e.target.name]:e.target.value
        })
      }

    useEffect(()=>{
      const  escribirComent=document.getElementById("escribirComent");
      escribirComent.addEventListener("click",function(e){
          e.preventDefault();
          setEstadoComent(true);
        })
    },[])
 
      const realizarComentario= async (e)=>{
        e.preventDefault();
        /**Aqui se postea el comentario (lo tengo apagado, por pruebas) */
        // supongoq ue cuando haces postComentario, alli se va a formatear todo el objecto y poner los datos del usuario del que hizo el comment?
        //si deberia aparecer todo mas su comentario que realizo
        //aqui y cuando el usuario elimine un comentario...
        // postComentario(txtComment,id_curso,ruta_video)
        setComment({
          ...comment,
          txtComment
        })
       }
       
       const cancelarComentario =()=>{
        document.getElementById("miForm").reset();
        setEstadoComent(false);
       }  

    return(
        <div className="comentarios-video">
               <h3 className="comentario-titulo">Comentarios <span className="cantComentarios">({cantidad})</span></h3>
           <div className="hacer-comentario">
                <img src="/assets/img/perfil.png" className="perfil-comentario"/>
                <form className="formulario-comentario" id="miForm" >
                    <input 
                      type="text" 
                      placeholder="Escribe un comentario..."
                      id="escribirComent" 
                      onChange={handleChange} 
                      name="comentario"
                      className="inputComentario"/> 
                      {(estadoComent)&&
                        <div className="btn-comentarios">
                          <button className="btn cancelar" type="button" onClick={cancelarComentario} >Cancelar</button>
                          <button className="btn comentar" type="submit" onClick={realizarComentario}>Comentar</button>
                        </div>
                      }
                </form>
           </div>       
        </div>
    )     
}