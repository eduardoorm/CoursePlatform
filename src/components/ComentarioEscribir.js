import { useEffect, useState } from 'react';
import { postComentario } from '../helpers/postComentario';
import './ComponentStyles/Comentarios.css'
export default function ComentarioEscribir(props) {
    const [coment,setComent] = useState({});
    const [estadoComent,setEstadoComent] = useState(false);
  
    const handleChange =(e)=>{
        setComent({
          ...coment,
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
        postComentario(coment)
       }
       
       const cancelarComentario =()=>{
        document.getElementById("miForm").reset();
        setEstadoComent(false);
       }  

    return(
        <div className="comentarios-video">
               <h3 className="comentario-titulo">Comentarios <span className="cantComentarios">({props.cantidad})</span></h3>
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