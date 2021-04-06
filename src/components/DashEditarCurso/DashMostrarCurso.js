import React, { useState } from 'react'
import { useFecthCurso } from '../../hooks/useFecthCurso'
import {Link} from 'react-router-dom'
import { deleteCurso } from '../../helpersAdmin/deleteCurso';
export const DashMostrarCurso = () => {
     const {dataCurso:cursos}= useFecthCurso();
     const [file, setFile] = useState()
     console.log("cursos el",cursos);

     const eliminarCurso =(nombre,id)=>{
      if(window.confirm(`¿Seguro que quieres eliminar al curso: "${nombre}"?`)){
        window.location.reload();
        return deleteCurso(id);
      }
     }
     const selecteHandler = e=>{
       setFile(e.target.files[0]);
     }
     const sendHandler = (e)=>{
       e.preventDefault();
       if(!file){
         alert("you must upload file")
         return
       }
      const formdata = new FormData();
     
      formdata.append('imagenCurso',file);
 
      fetch('http://localhost:3001/files',{
        method: 'POST',
        body: formdata,
      })
      .then(res=> res.text())
      .then(res=>console.log(res))
      .catch(err=>{
       console.log(err);
      })
      document.getElementById('fileinput').value=null;

      setFile(null);
     }
     
    return (
      <>
       {/* <div>
         <p>Sube un archivo Bro</p>

        <form action="files" method="post" encType="multipart/form-data">
          <input id="fileinput" type="file" name="imagenCurso" onChange={selecteHandler}/>


          <button type="submit" onClick={sendHandler} >Enviar</button>
        </form>
         
       </div>  */}
        <div className="Container_curso">
             
           {    cursos?.map(el=>
                <>
            
                 <div className="categoria_cursos">
                  <div className="ID_Curso">
                         <img src={el.imagen}></img>
                          <p><span className="negr_curso">ID: </span>{el.id}</p>
                        </div>
                        <div className="nombre_Categoria">
                          <p> <span className="negr_curso">Titulo:</span>  {el.nombre}</p>
                        </div>
                        <div className="nombre_Categoria">
                          <p> <span className="negr_curso">Descripción</span> : {el.descripcion || "----"}</p>
                        </div>
                        <div className="nombre_Categoria">
                          <p><span className="negr_curso">Duración:</span>  {el.duracion || "----"}</p>
                        </div>
                        <div className="nombre_Categoria">
                          <p> <span className="negr_curso">Categoria: </span> {el.categoria || "----"}</p>
                        </div>
                        <div className="nombre_Categoria">
                          <p> <span className="negr_curso">Precio: </span> {el.precio || "----"}</p>
                        </div> 
                        <div className="nombre_Categoria">
                          <p> <span className="negr_curso">Profesor: </span> {el.profesor|| "----"}</p>
                        </div>      
                        <div className="botones_curso">
                         <Link to={`/admin/cursos/contenido/${el.ruta}`}><button className="btn_curso" id="masContenidoCurso">+ Contenido</button></Link>   
                         <Link to={`/admin/cursos/editar/${el.ruta}`}><button className="btn_curso" id="btn_editarCurso" >Editar</button></Link>   
                         <button className="btn_curso" id="btn_eliminarCurso" onClick={()=>eliminarCurso(el.nombre,el.id)}>Eliminar</button>    
                    </div>
                  </div>
               </>
               )
           }
        </div>
        </>
    )
}
