import React, { useState } from 'react'
import { DashEditarCategoria } from '../components/DashEditarCate';
import { getCategoria } from '../helpersAdmin/getCategoria'
import {Link} from 'react-router-dom'
import {useFecthGetCategoria} from '../hooksAdmin.js/useFecthGetCategoria'
import { deleteCategoria } from '../helpersAdmin/deleteCategoria';
export const DashMostrarCategoria = () => {
    const {dataCategoria:categorias}=useFecthGetCategoria();
    const [editar, setEditar] = useState(true);
    const eliminarCate=(id_categoria)=>{
      if(window.confirm(`¿Seguro que quieres eliminar al estudiante ID:${id_categoria}?`)){
        window.location.reload();
         return deleteCategoria(id_categoria)
      }
    }
    return (
        <div className="Container_categoria">
                { categorias?.map(categoria=>
                <>  <div className="categoria_items">
                        <div className="ID_Categoria">
                          <p>{categoria.id}</p>
                        </div>
                        <div className="nombre_Categoria">
                          <p>{categoria.nombre}</p>
                        </div>
                        <div className="botones_categoria">
                         <Link to={`/admin/categorias/editar/${categoria.id}`}><button className="btn_categoria" >Editar</button></Link>   
                         <button className="btn_categoria" onClick={()=>eliminarCate(categoria.id)}>Eliminar</button>    
                        </div>
                    </div> 
                </>
                )}
             </div>
    )
}
