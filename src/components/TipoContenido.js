import React,{useState,useEffect} from 'react';
import CargarVideo from './CargarVideo'
import CargarPdf from './CargarPdf' 
export default function TipoContenido() {

    const [videos,setVideo] = useState(false);
    const [pdf,setPdf] = useState(false);

    const cargarVideo=()=>videos ? setVideo(false) : setVideo(true);
    const cargarPDF=()=>pdf ? setPdf(false) : setPdf(true);

    return(
        <>
            { (videos || pdf) 
            ? (pdf) 
                ? <CargarPdf/> : <CargarVideo/>
             :
                <div className="tipos-contenido">
                <p>  Seleccionar tipo de contenido principal. Se pueden añadir archivos y enlaces como recursos.  </p>
                <div className="tipos-contenido-botones">
                    <button onClick={cargarVideo}>Video</button>
                    <button onClick={cargarPDF}>Pdf</button>
                </div>
                </div>    
           }
     </>    
    )
}