import React from 'react'
import { Link } from 'react-router-dom'
import { deleteLeccion } from '../../helpersAdmin/deleteLeccion'
import { useFetchGetVideosPorModulo } from '../../hooks/useFetchGetVideosPorModulo'

export const DashLeccion = ({id_module}) => {
   const {dataVideos:videos} =useFetchGetVideosPorModulo(id_module)
   const deleteLessons= (id,name)=>{
    if(window.confirm(`¿Surely you want to delete the video: ${name}?`)){
      window.location.reload();
     return deleteLeccion(id);
    }
   }

    return (
       <div className="lecciones_container">
            {videos.map(el=>
            <div className="lecciones_item" key={el.id_video}>
                <p>
                    {el.name}
                </p>
                <div className="lecciones_botones">
                <Link to={`/admin/leccion/editar/${el.url_video}`}>
                    <button className="lecciones_botones_item">
                        <i className="fas fa-pencil-alt" ></i>
                    </button> 
                </Link>

                <button onClick={()=>{deleteLessons(el.id_video,el.name)}} className="lecciones_botones_item">
                    <i className="fas fa-times"></i>
                </button> 

                </div>
             </div>
                )
             }
       </div>
    )
}
