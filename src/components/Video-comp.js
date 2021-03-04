import React , {Component} from 'react'
import './Video-comp.css'
import ResumenCurso from './ResumenCurso'
import { ContainerModulos, ContainerVideos} from '../elementos/Resumen-curso'
import TituloDelModulo from './TituloModulo'

export default class VideoComp extends Component{
      
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
             <div className="navbar-preview"><p>INTESLA EDUCATION</p></div>
       <div className="container-seccion-video">
       <div className="reproductor-left">
  

       </div>
       <div className="reproductor-right">
           <div className="reproductor-video">
            <video
            controls
            id="video-Player"
            className="video-js vjs-big-play-centered"
            controls
            
            preload="auto"
            controls poster="assets/img/profesor1.jpg"
            data-setup="{}"
            >
             <source  src="assets/videos/video1.mp4" type="video/mp4" ></source>
            </video>
           </div>
           <div className="footer-reproductor">
               <h3>Profesiones en el mundo de la programación</h3>
               <div>
                    <button className="Anterior"> <i className="fas fa-angle-left"></i> Anterior</button>
                    <button className="Siguiente">Siguiente <i className="fas fa-angle-right"></i></button>
               </div>
               
           </div>

           <div className="descrip-video">
            <p>Aquí te contaré todas las posibilidades de profesiones alrededor de la programación y sus responsabilidades.</p>
           </div>

           <div className="comentarios-video">
               <h3 className="comentario-titulo">Comentarios <span className="cantComentarios">(25)</span></h3>
               <div className="hacer-comentario">
                <img src="assets/img/perfil.png" className="perfil-comentario"/>
                <input type="text" placeholder="Escribe un comentario..." className="inputComentario"/> 
               </div>
             
           </div>
           <div className="btn-comentarios">
            <button className="btn cancelar">Cancelar</button>
           <button className="btn comentar">Comentar</button>
           </div>

           <div className="">
               <div className="comentario-realizado">
                <img src="assets/img/perfil.png" alt="img-perfil"className="perfil-comentario"/>
                <div>
                    <p>Jorge Mendieta</p>
                    <p className="hace-dias">hace 3 días</p>
                </div>              
               </div>
               <div className="comentario-realizado-txt">
                <p className="text-coment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis temporibus 
                      praesentium dignissimos illum voluptate nesciunt dolore incidunt,
                     saepe culpa porro voluptatum nobis aut corporis pariatur facilis reiciendis sit similique enim.saepe 
                     culpa porro voluptatum nobis aut corporis pariatur facilis reiciendis sit similique enim.
                     praesentium dignissimos illum voluptate nesciunt dolore incidunt,praesentium dignissimos illum voluptate
                     nesciunt dolore incidunt,</p>
                <button className="boton-coment"><i className="fas fa-thumbs-up"></i><small className="cant-btn1">0</small></button>
                <button className="boton-coment"><i className="fas fa-magic"></i><small  className="cant-btn2"> 0</small></button>
                <button className="boton-coment"><i className="fas fa-lightbulb"></i><small  className="cant-btn3">0</small></button>
                <button className="btn-reponder">Responder</button>
               </div>

           </div>
         
       </div>
       </div>
     
            </>
        )
    }


}