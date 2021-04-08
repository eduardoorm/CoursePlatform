         
import React, { useEffect, useState } from 'react'
import {useHistory, useParams} from 'react-router-dom'
export default function DescripcionVideo(props) {
    const {videosCurso} = props;
    const history = useHistory()
 
    const {id,id_video}= useParams();
    const pos = videosCurso?.findIndex(el=>el==id_video);
    console.log("pos",pos);
    const btnAnterior = ()=>{
     history.push(`/course/${id}/${videosCurso[pos-1]}`)
     window.location.reload();
    }

    const btnSiguiente  = ()=>{
     history.push(`/course/${id}/${videosCurso[pos+1]}`)
     window.location.reload();
    }

    return(
        <>

           <div className="footer-reproductor">
               <h3>{props.nombre}</h3>
               <div className="footer-botones">
            
               <button className="Anterior" onClick={btnAnterior} > <i className="fas fa-angle-left"></i> Anterior</button>    
               <button className="Siguiente" onClick={btnSiguiente}>Siguiente <i className="fas fa-angle-right"></i></button>          
    
               </div>       
           </div>

           <div className="descrip-video">
            <p>{props.descripcion}</p>
           </div>
        </>
    )     
}
           
           
     