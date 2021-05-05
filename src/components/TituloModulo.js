import React , { useState} from 'react'
import { Label } from '../elementos/Preguntas';
import { ContainerTituloModulo,NumeroTitulo,BtnModulo,TituloModulo,ContainerHeaderModulo} from '../elementos/Resumen-curso'
import { useFetchVideo } from '../hooks/useFetchVideo';
import TituloVideo from './TituloVideo'

export default function TituloDelModulo ({pos,nombre,id_modulo}){
    const [showVideos, setShowVideos] = useState(true)
    const collapseVideos=()=> setShowVideos(!showVideos);
    const {dataVideos:videos} = useFetchVideo(id_modulo);
 
        return(  
                 <>
                 <ContainerHeaderModulo >    
                  
                    <ContainerTituloModulo>
                        <NumeroTitulo>{pos}</NumeroTitulo>   
                        <TituloModulo>{nombre}</TituloModulo>
                       
                    </ContainerTituloModulo> 
                  
                    <BtnModulo onClick={collapseVideos} ></BtnModulo>
                 </ContainerHeaderModulo>
                 
                 {(showVideos) ?
                    (videos.length>0) ?
                    videos.map(video=> <TituloVideo key={video.nombre} {...video}/>) 
                    :
                    <span>Modulo sin contenido ☹</span>
                    :
                    <></>
                 } 

                </>
        )
}