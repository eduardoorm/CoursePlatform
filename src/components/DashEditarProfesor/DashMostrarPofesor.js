import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {useFecthGetCategoria} from '../../hooksAdmin.js/useFecthGetCategoria'
import { deleteCategoria } from '../../helpersAdmin/deleteCategoria';
import { useFetchGetInstructor } from '../../hooksAdmin.js/useFetchGetInstructor';
import { deleteProfesor } from '../../helpersAdmin/deleteProfesor';
export const DashMostrarPofesor = () => {
    // const {dataCategoria:categorias}=useFecthGetCategoria();
      const {dataProfesor:profesor}=useFetchGetInstructor();
       console.log("profesores",profesor);
    const eliminarCate=(nombre,id_profesor)=>{
      if(window.confirm(`¿Seguro que quieres eliminar al profesor : "${nombre}"?`)){
         window.location.reload();
         return deleteProfesor(id_profesor)
      }
    }

    return (
        <div className="Container_categoria">
                { profesor?.map((profesor,pos)=>
                <>  <div className="categoria_items">
                        {/* <div className="ID_Categoria">
                          <p>{categoria.id}</p>
                        </div> */}
                        <div className="ID_Categoria">
                          <p>{pos+1}</p>
                        </div>

                        <div className="nombre_Categoria">
                          <p>{profesor.nombre} {profesor.apellidos}</p>
                        </div>

                        <div className="botones_categoria">
                         <Link to={`/admin/profesor/editar/${profesor.id}`}><button className="btn_categoria" >Editar</button></Link>   
                         <button className="btn_categoria" onClick={()=>eliminarCate(profesor.nombre,profesor.id)}>Eliminar</button>    
                        </div>
                    </div> 
                </>
                )}
             </div>
    )
}
