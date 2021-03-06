import { useEffect, useState } from 'react';
import { postComentario } from '../helpers/postComentario';
import { UseFecthUsuario } from '../hooks/useFecthUsuario';
import './ComponentStyles/Comentarios.css'
export default function ComentarioEscribir({cantidad,ruta_video,id_curso, dispatch}) {
    const {data:usuario} =UseFecthUsuario();
    const {nombre,apellido,id_persona}=usuario;
    const [txtComment, setTxComment] = useState({})
    const [estadoComent,setEstadoComent] = useState(false);
    const d = document;
    const inputComentario= d.getElementById('escribirComent');
    
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

        const comment = {
          ...txtComment,
          id_persona,
          id_curso,
          ruta_video,
          fecha_comentario: Date.now()
        }

        const {id_comentario} = await postComentario(comment);
        const date = new Date(Number(Date.now())); 
        const fecha = '12/12/12'

        const payload = {
          ...comment,
          nombre,
          apellido,
          id_comentario,
          fecha,
          imageUrl:usuario?.imageUrl,
        }
        
        dispatch({
          type: 'ADD_COMMENT', payload
        })

        inputComentario.value="";
        setEstadoComent(false);
       }
       
       const cancelarComentario =()=>{
          document.getElementById("miForm").reset();
          setEstadoComent(false);
       }  

    return(
        <div className="comentarios-video">
               <h3 className="comentario-titulo">Comentarios <span className="cantComentarios">({cantidad})</span></h3>
           <div className="hacer-comentario">
                <img src={usuario?.imageUrl || "/assets/img/perfil.png"} className="perfil-comentario"/>
                <form className="formulario-comentario" id="miForm" >
                    <input 
                       autoComplete= "off"
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