import React, {useReducer } from 'react'
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

export default function VideoComp() {
  /* COMENTARIOS STADO */ 

  const [comments_list, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'LOAD_COMMENTS': 
        return action.payload;
      case 'DEL_COMMENT': {
        const id = action.payload;
        const newState = state.filter(el => el.id_comentario !== id) 
        return newState;
      }
      case 'ADD_COMMENT': {
        return [...state, action.payload] 
      }
      default:
        return state; 
    }
  }, []);
 

  const {id,id_video}=useParams(); 
  useFetchComentariosPorVideo(id_video, dispatch);

  const {dataCursoID:curso} =useFecthCursoID(id);
  const {dataModulos:modulos}= useFetchModulo(id);
  const {data:usuario} =UseFecthUsuario();
  const {dataVideosCurso:videosCurso}=useFetchGetVideosPorCurso(id);

  const array = videosCurso?.map(({ruta_video})=>ruta_video)
  const id_persona_actual=usuario.id_persona;

  const{nombre} = curso.length>0 && curso[0];
  const{dataVideo:video}=useFetchVideoID(id_video);
  
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
                
                          <ComentarioEscribir 
                             cantidad={comments_list.length} 
                             ruta_video={video[0]?.ruta_video}
                             id_curso={curso[0]?.id}
                             dispatch={dispatch}
                          />

                          <ComentarioBox 
                            comentarios={comments_list} 
                            dispatch={dispatch}
                            id_persona_actual={id_persona_actual}
                          />

               </div>
        </div> 
   </>
  )
}