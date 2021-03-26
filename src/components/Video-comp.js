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
export default function VideoComp() {
  const {id,id_video}=useParams(); 
  const {dataComentPorVideo:comentarios}=useFetchComentariosPorVideo(id_video)
  const {dataCursoID:curso} =useFecthCursoID(id);
  const {dataModulos:modulos}= useFetchModulo(id);
  const{nombre} = curso.length>0 && curso[0];
   const{dataVideo:video}=useFetchVideoID(id_video);
        return(
            <>
       <div className="navbar-preview">
         <div className="navbar-preview-titulo">
         <Link to="/"><i class="fab fa-reddit" id="icon_videoReproductor"></i></Link> 
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
            <Link to="/"><i class="fas fa-arrow-left"></i></Link> 
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
                     
             <DescripcionVideo {...video[0]}/>
         
             {/* COMPONENTE PARA REALIZAR UN COMENTARIO*/}
             <ComentarioEscribir cantidad={comentarios?.length}/>
             <div className="container_comentario">
             {comentarios?.length !== 0
               &&
               comentarios.map(comentario =>
               
                   <Comentario {...comentario}/>
              
               )  
             }  
               </div>  
         </div>
     </div> 
   </>
  )
}