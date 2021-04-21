import React from 'react'
import {useHistory, useParams} from 'react-router-dom'
export default function DescripcionVideo(props) {
    const history = useHistory()
    const {videosCurso} = props;
    const arrayVideosCourse = videosCurso;
    const {id:ruta_curso,id_video:ruta_video}= useParams();
    const posCurrentUrl = arrayVideosCourse?.indexOf(ruta_video) //DEVUELVE LA POSICION DE LA URL DENTRO DEL ARRAY

    const btnAnterior = ()=>{
        const backPosition = posCurrentUrl-1;
        if(backPosition<0) {
           return history.push(`/course/${ruta_curso}/${arrayVideosCourse[0]}` )           
            
        }
        history.push(`/course/${ruta_curso}/${arrayVideosCourse[posCurrentUrl-1]}`)
        // window.location.reload();
    }
    
    const btnSiguiente = ()=>{
        const nextPosition = posCurrentUrl+1;
        if(nextPosition===arrayVideosCourse.length) {
            return history.push(`/course/${ruta_curso}/${arrayVideosCourse[0]}` )           
            
        }
        history.push(`/course/${ruta_curso}/${arrayVideosCourse[posCurrentUrl+1]}`)
        // window.location.reload();
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
           
           
     