         
import React, { useEffect, useState } from 'react'
import {useHistory, useParams} from 'react-router-dom'
export default function DescripcionVideo(props) {
    const {videosCurso} = props;
    const history = useHistory()
 
    const {id,id_video}= useParams();
    const pos = videosCurso?.findIndex(el=>el==id_video);
    // const btnAnterior = ()=>{
    //  history.push(`/course/${id}/${videosCurso[pos-1]}`)
    //  window.location.reload();
    // }

    // const btnSiguiente  = ()=>{
    //  history.push(`/course/${id}/${videosCurso[pos+1]}`)
    //  window.location.reload();
    // }
        const [preview, setPreview] = useState(false)
        const [siguiente, setSiguiente] = useState(false)
        const array = videosCurso;
        const position = array.indexOf(id_video);
        const [index, setIndex] = useState(position);
        useEffect(() => {
            (position!==0) ? setPreview(true) : setPreview(false);
            (position+1!==array.length) ? setSiguiente(true) : setSiguiente(false)
            setIndex(position)
            console.log("pos",position);
         console.log("index",index);
        }, [position])
        const btnAnterior = ()=>{
            (index === 0)? setIndex(0) : setIndex(index-1)
        }
        const btnSiguiente = ()=>{
            (index+1 === array.length)? setIndex(0) : setIndex(index+1) ;
            console.log("valor",array[index]);
            if(index>0){
                history.push(`/course/curso-arduino/${array[index]}`)
            }
        }
       
    return(
        <>   
           <div className="footer-reproductor">
               <h3>{props.nombre}</h3>
               <div className="footer-botones">
            
              { preview && <button className="Anterior" onClick={btnAnterior} > <i className="fas fa-angle-left"></i> Anterior</button>  }  
              {  siguiente && <button className="Siguiente" onClick={btnSiguiente}>Siguiente <i className="fas fa-angle-right"></i></button>  }        
    
               </div>       
           </div>

           <div className="descrip-video">
            <p>{props.descripcion}</p>
           </div>
        </>
    )     
}
           
           
     