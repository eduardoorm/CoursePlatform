import React, { useEffect, useMemo } from 'react'
import { useState } from 'react'
import {Context} from '../store/UseContextComment'
import ComentarioEscribir from './ComentarioEscribir'
import DescripcionVideo from './DescripcionVideo'
import { useHistory, useParams } from 'react-router';
import {useFecthCursoID}from '../hooks/useFecthCursoID'
import { useFetchComentariosPorVideo } from '../hooks/useFetchComentariosPorVideo';
import { useFetchModulo } from '../hooks/useFetchModulo';
import { useFetchVideoID } from '../hooks/useFetchVideoID';
import { UseFecthUsuario } from '../hooks/useFecthUsuario';
import { useFetchGetVideosPorCurso } from '../hooks/useFetchGetVideosPorCurso';

import { SimpleMenu } from './SimpleMenu';
import { ReproductorLeft } from './ReproductorLeft';
import { ReproductorVideo } from './ReproductorVideo';
import { ComentarioBox } from './ComentarioBox';
import { TitleNavVideo } from './TitleNavVideo';

import './ComponentStyles/Navbar.css'
import './ComponentStyles/Video-comp.css'
import './Comentario'
// en este componente se administra todo esto
export default function VideoComp() {
  
  /* CONTEXT  */
  const {id,id_video}=useParams(); 
  const [comment, setComment] = useState({})

  // Realiza un commit para que estos cambios no affecte lo que ya llevas. 
  //voy
  const {dataComentPorVideo:comentarios}=useFetchComentariosPorVideo(id_video,comment);

  const {dataCursoID:curso} =useFecthCursoID(id);
  const {dataModulos:modulos}= useFetchModulo(id);
  const {data:usuario} =UseFecthUsuario();
  const {dataVideosCurso:videosCurso}=useFetchGetVideosPorCurso(id);

  const array = videosCurso?.map(({ruta_video})=>ruta_video)
  const id_persona_actual=usuario.id_persona;
  // te hago esta pregunta.
  // Al hacer el comentario donde se le aplica el submit
  const{nombre} = curso.length>0 && curso[0];
  const{dataVideo:video}=useFetchVideoID(id_video);
   useEffect(() => {
    setComment(comentarios)
   }, [comentarios])
  
  /*MATERIAL UI MENU */
   const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const history = useHistory();

  const handleCerrarSesion =()=>{
    localStorage.clear();
    setAnchorEl(null);
    history.replace("/login");
  }

  return(
      <>
      
        <div className="navbar-preview">

             <TitleNavVideo nombre={nombre}/>

              <SimpleMenu 
                  anchorEl={anchorEl}
                  handleClose={handleClose}
                  handleClick={handleClick} 
                  data={usuario} 
                  handleCerrarSesion={handleCerrarSesion}
                />
        </div>

        <div className="container-seccion-video">
          <ReproductorLeft modulos={modulos}/>

              <div className="reproductor-right">
                   <ReproductorVideo/>
                  
                   <DescripcionVideo 
                      {...video[0]} 
                      videosCurso={array}
                    />
                   <Context.Provider value= {{
                                  comment,
                                  setComment,
                    }} >
                          <ComentarioEscribir 
                             cantidad={comentarios?.length} 
                             ruta_video={video[0]?.ruta_video}
                             id_curso={curso[0]?.id}
                          />

                      
                          <ComentarioBox 
                            comentarios={comentarios}
                            id_persona_actual={id_persona_actual}
                          />
                    </Context.Provider>

               </div>
        </div> 
   </>
  )
}