import React,{useState,useEffect} from 'react';
import TipoContenido from './TipoContenido'
   
export default function AddArchivo(props) {
    const [contenido,setContenido] = useState(false);
    const handleContenido=()=>{
        contenido ? setContenido(false) : setContenido(true);   
    }

    return(
        <>
         <div className="publicar-seccion-contenido">
            <div className="publicar-seccion-contenido-item">
                <i className="fas fa-check-circle"></i> <p>Archivo {props.numModulo}.{props.pos}:</p>
                <input type="text" placeholder="Ingrese nombre del archivo" name={"nom_video"+props.numModulo+"."+props.pos}  onChange={props.onChange}/>
            </div>
                <div>
                    <button className="mas-contenido" onClick={handleContenido}>
                        + Contenido</button>
                        <i className="fas fa-chevron-down"></i>
                </div>                         
        </div>

            {contenido ? <TipoContenido/> :<> </>}
            {/* <div className="contenedor-preview-video">
                <div className="contenedor-preview-video-item">
                    <div className="preview-portada">
                        <img src="assets/img/profesor1.jpg" alt="imagen-video"/>
                    </div>
                    <div className="detalles-del-video">
                        <p className="">231 Cierre del curso.mp4</p>
                        <p>02:57</p>
                        <p><i className="fas fa-pencil-alt"></i> Editar contenido</p>
                    </div>
                </div>
        
                <div className="contenedor-preview-video-item">
                    <button className="btn-vista-previa">Vista previa</button>
                </div>
            </div> */}
      </>
     
    )


}