import React ,{Component} from 'react';
import './Publicar-comp.css'

export default class PublicarComp extends Component{
   
    constructor(props){
      super(props)
    }

    render(){
        return(
            <section class="publicar-curso">
  
       <h1 >Publicar curso</h1>
       <div class="contenedor-publicarCurso">
          <div class="mensaje-publicar"><i class="fas fa-exclamation"></i> Añade aquí el contenido del curso, como clases,
               secciones del curso, tareas y mucho más. Haz clic en el icono + de la izquierda para dar los primeros pasos.</div>

               <p class="descripcion-publicarCurso">Empieza a dar forma a tu curso creando secciones, clases y ejercicios prácticos
                    (cuestionarios, ejercicios de codificación y tareas).</p>
              
                    <div class="publicar-seccion">
                        <div class="titulo-seccion">
                             <p>Sección 1: </p><i class="far fa-file-alt"></i>  <p> Introducción</p>
                        </div>

                        <div class="clase-seccion">
                                <div class="publicar-seccion-contenido">

                                <div class="publicar-seccion-contenido-item"><i class="fas fa-check-circle"></i> <p>Lectura 1:</p>
                                    <i class="far fa-file-alt"></i><p>Introduccion</p></div>
                                    <div><button class="mas-contenido">+ Contenido</button><i class="fas fa-chevron-down"></i></div>                 
                                </div>
                                
                                <div class="tipos-contenido">
                                    <p>  Seleccionar tipo de contenido principal. Se pueden añadir archivos y enlaces como recursos.  </p>
                                    <div class="tipos-contenido-botones">
                                        <button>Video</button>
                                        <button>Pdf</button>
                                    </div>
                                </div>

                                <div class="cargar-video">
                                    <p class="titulo-cargar-video">Cargar video</p>
                                    <input type="file" class="file-select-" id="input-video" name="HOLA"/>
                                    <p class="Nota: Todos los archivos deber tener al menos 720p y pesar menos de 4 GB."></p>
                                </div>
                        </div>

                        <button class="btn-plus"><i class="fas fa-plus"></i></button>

                    </div>

                    <button class="btn-plus"><i class="fas fa-plus"></i></button>
                    
                    <div class="publicar-seccion">
                        <div class="titulo-seccion">
                             <p>Sección 1: </p><i class="far fa-file-alt"></i>  <p> Introducción</p>
                        </div>

                        <div class="clase-seccion">
                                <div class="publicar-seccion-contenido">
                                <div class="publicar-seccion-contenido-item"><i class="fas fa-check-circle"></i> <p>Lectura 1:</p>
                                    <i class="far fa-file-alt"></i><p>Introduccion</p></div>
                                    <div><button class="mas-contenido">+ Contenido</button><i class="fas fa-chevron-down"></i></div> 
                                    
                                </div>
                                
                                <div class="tipos-contenido">
                                    <p>  Seleccionar tipo de contenido principal. Se pueden añadir archivos y enlaces como recursos.  </p>
                                    <div class="tipos-contenido-botones">
                                        <button>Video</button>
                                        <button>Pdf</button>
                                    </div>
                                </div>
                                <div class="cargar-video">
                                    <p class="titulo-cargar-video">Cargar video</p>
                                    <input type="file" class="file-select-" id="input-video" name="HOLA"/>
                                    <p class="Nota: Todos los archivos deber tener al menos 720p y pesar menos de 4 GB."></p>
                                </div>

                                <div class="contenedor-preview-video">
                                    <div class="contenedor-preview-video-item">
                                        <div class="preview-portada">
                                            <img src="assets/img/profesor1.jpg" alt="imagen-video"/>
                                        </div>
                                        <div class="detalles-del-video">
                                            <p class="">231 Cierre del curso.mp4</p>
                                            <p>02:57</p>
                                            <p><i class="fas fa-pencil-alt"></i> Editar contenido</p>
                                        </div>
                                    </div>
                            
                                    <div class="contenedor-preview-video-item">
                                        <button class="btn-vista-previa">Vista previa</button>
                                    </div>
                                  
                                </div>
                        </div>

                        <button class="btn-plus"><i class="fas fa-plus"></i></button>

                    </div>
       </div>
    </section>
        )
    }


}


 