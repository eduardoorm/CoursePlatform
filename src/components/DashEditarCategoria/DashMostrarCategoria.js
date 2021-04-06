import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {useFecthGetCategoria} from '../../hooksAdmin.js/useFecthGetCategoria'
import { deleteCategoria } from '../../helpersAdmin/deleteCategoria';
export const DashMostrarCategoria = () => {
    const {dataCategoria:categorias}=useFecthGetCategoria();
    const eliminarCate=(nombre,id_categoria)=>{
      if(window.confirm(`¿Seguro que quieres eliminar la categoria : "${nombre}"?`)){
        window.location.reload();
         return deleteCategoria(id_categoria)
      }
    }
    return (
        <div className="Container_categoria">
                { categorias?.map((categoria,pos)=>
                <>  <div className="categoria_items">
                        {/* <div className="ID_Categoria">
                          <p>{categoria.id}</p>
                        </div> */}
                        <div className="ID_Categoria">
                          <p>{pos+1}</p>
                        </div>

                        <div className="nombre_Categoria">
                          <p>{categoria.nombre}</p>
                        </div>
                        <div className="botones_categoria">
                         <Link to={`/admin/categorias/editar/${categoria.id}`}><button className="btn_categoria" >Editar</button></Link>   
                         <button className="btn_categoria" onClick={()=>eliminarCate(categoria.nombre,categoria.id)}>Eliminar</button>    
                        </div>
                    </div> 
                </>
                )}
             </div>
    )
}
