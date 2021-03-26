import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { deleteEstudiante } from '../../helpersAdmin/deleteEstudiante';
import { useFetchGetEstudiante } from '../../hooksAdmin.js/useFetchGetEstudiante';

export const DashMostarStudent = () => {
    const {dataEstudiante:estudiante}= useFetchGetEstudiante();
    const [editar, setEditar] = useState(true);
    const eliminarStudent=(id_persona,id_estudiante)=>{
      if(window.confirm(`¿Seguro que quieres eliminar al estudiante ID:${id_estudiante}?`)){
        window.location.reload();
         return deleteEstudiante(id_persona);
      }
    }
    return (
        <div className="Container_categoria">
                { estudiante?.map(estudiante=>
                <>  <div className="categoria_items">
                        <div className="ID_Categoria">
                          <p>{estudiante.id}</p>
                        </div>
                        <div className="nombre_Categoria">
                          <p>{estudiante.nombre}</p>
                        </div>
                        <div className="nombre_Categoria">
                          <p>{estudiante.apellidos || "----"}</p>
                        </div>
                        <div className="nombre_Categoria">
                          <p>{estudiante.email || "----"}</p>
                        </div>
                        <div className="botones_categoria">
                         <Link to={`/admin/estudiante/editar/${estudiante.id}`}><button className="btn_categoria" >Editar</button></Link>   
                         <button className="btn_categoria" onClick={()=>eliminarStudent(estudiante.id_persona,estudiante.id)}>Eliminar</button>    
                        </div>
                    </div> 
                </>
                )}
             </div>
    )
}
