import React from 'react'
import { ContenidoModulo,TxtContenidoModulo } from '../elementos/Resumen-curso'
import {Link} from 'react-router-dom'
import {ContainerVideoTitlePlayer} from '../elementos/VideoElements'
const ListVideo =({nombre,duracion})=>{
    if(!nombre) return (<span>Modulo sin contenido ☹</span>)   
    return(
      <p><i className="fas fa-lock"></i> {nombre} </p>
    )
  }
  
export const TitleVideoPlayer =  ({id_video ,nombre,duracion ,id_modulo,id_curso,ruta_curso,ruta_video}) => {
    return (
        <Link to={`/course/${ruta_curso}/${ruta_video}`} >
            <ContainerVideoTitlePlayer >
            <div className="item-contenido-modulo">
                <TxtContenidoModulo> 
                    
                <ListVideo nombre={nombre} duracion={duracion}/>
                </TxtContenidoModulo>
            </div>
            </ContainerVideoTitlePlayer>  
        </Link>       
    )
}
