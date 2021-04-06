import './ComponentStyles/Video-comp.css'
import { useEffect, useState } from 'react';
import './Comentario'
import Comentario from './Comentario'
import ComentarioEscribir from './ComentarioEscribir'
import DescripcionVideo from './DescripcionVideo'
import { useParams } from 'react-router';
import {useFecthCursoID}from '../hooks/useFecthCursoID'
import { useFetchComentariosPorVideo } from '../hooks/useFetchComentariosPorVideo';
import { useFetchModulo } from '../hooks/useFetchModulo';
import { useFetchVideoID } from '../hooks/useFetchVideoID';
import TituloDelModulo from './TituloModulo';
import {Btn} from './Button.js'
import {Link} from 'react-router-dom';
import './ComponentStyles/Navbar.css'
import { useFecthUsuario } from '../hooks/useFecthUsuario';
import { useFetchGetVideosPorCurso } from '../hooks/useFetchGetVideosPorCurso';
export default function VideoComp() {
  const {id,id_video}=useParams(); 
  const {dataComentPorVideo:comentarios}=useFetchComentariosPorVideo(id_video)
  const {dataCursoID:curso} =useFecthCursoID(id);
  const {dataModulos:modulos}= useFetchModulo(id);
  const {data:usuario} =useFecthUsuario();
  const {dataVideosCurso:videosCurso}=useFetchGetVideosPorCurso(id);

  const array = videosCurso?.map(({ruta_video})=>ruta_video)
  const id_persona_actual=usuario.id_persona;

  const{nombre} = curso.length>0 && curso[0];
  const{dataVideo:video}=useFetchVideoID(id_video);
        return(
            <>
       <div className="navbar-preview">
         <div className="navbar-preview-titulo">
         <Link to="/"><i className="fab fa-reddit" id="icon_videoReproductor"></i></Link> 
           <p>{nombre}</p> 
         </div>   
           {/* <div className="container_Calificacion">
           <i className="fa fa-star review__star" id="starVideo"></i>    
           <span className="calificacion">Deja una calificación</span>
           </div>   */}
         <div className="contain__showPefil">           
                                  <Btn 
                                  
                                  value={
                                  <>
                                  <img src="/assets/img/perfil.png" 
                                  className="img__perfil"
                                  /> 
                                  <i className="fas fa-chevron-down" id="buton__perfil"></i>
                                  </>
                                  }
                                  style="btn_mostrarPerfil_Video"/>
                               </div>
         </div>
       <div className="container-seccion-video">
          <div className="reproductor-left">
            <div className="container_txt_ClasesDelCurso">
            <Link to="/"><i className="fas fa-arrow-left"></i></Link> 
             <p className="txt_clasesDelCurso">Clases del Curso</p>
            </div>
           <div >
              {
                modulos.map(
                (el,pos)=><TituloDelModulo pos={pos+1} {...el}/>
                )}
            </div>
          </div>
          
        <div className="reproductor-right">
             <div className="reproductor-video">
                 <video
                   controls
                   id="video-Player"
                   className="video-js vjs-big-play-centered"
                   controls
                   preload="auto"
                   controls poster="/assets/img/profesor1.jpg"
                   data-setup="{}"
                 >
                 <source  src="/assets/videos/video1.mp4" type="video/mp4" ></source>
                 </video>
             </div>
                     
             <DescripcionVideo {...video[0]} videosCurso={array}/>
         
             {/* COMPONENTE PARA REALIZAR UN COMENTARIO*/}
             <ComentarioEscribir cantidad={comentarios?.length} ruta_video={video[0]?.ruta_video} id_curso={curso[0]?.id}/>
             <div className="container_comentario">
             {comentarios?.length !== 0
               &&
               comentarios.map(comentario =>
               
                   <Comentario {...comentario} id_persona_actual={id_persona_actual}/>
              
               )  
             }  
               </div>  
         </div>
     </div> 
   </>
  )
}