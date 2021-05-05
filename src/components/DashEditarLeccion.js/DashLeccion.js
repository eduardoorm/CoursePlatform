import React from 'react'
import { Link } from 'react-router-dom'
import { deleteLeccion } from '../../helpersAdmin/deleteLeccion'
import { useFetchGetVideosPorModulo } from '../../hooks/useFetchGetVideosPorModulo'

export const DashLeccion = ({id_modulo}) => {
   const {dataVideos:videos} =useFetchGetVideosPorModulo(id_modulo)
   const deleteLecciones= (id,nombre)=>{
    if(window.confirm(`¿Seguro que quieres eliminar al video: ${nombre}?`)){
      window.location.reload();
     return deleteLeccion(id);
    }
   }

    return (
       <div className="lecciones_container">
            {videos.map(el=>
            <div className="lecciones_item" key={el.id_video}>
                <p>
                    {el.nombre}
                </p>
                <div className="lecciones_botones">
                <Link to={`/admin/leccion/editar/${el.ruta_video}`}>
                    <button className="lecciones_botones_item">
                        <i className="fas fa-pencil-alt" ></i>
                    </button> 
                </Link>

                <button onClick={()=>{deleteLecciones(el.id_video,el.nombre)}} className="lecciones_botones_item">
                    <i className="fas fa-times"></i>
                </button> 

                </div>
             </div>
                )
             }
       </div>
    )
}
