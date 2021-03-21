import React , {Component, useState} from 'react'
import { ContainerTituloModulo,NumeroTitulo,BtnModulo,TituloModulo,ContainerHeaderModulo,ContainerVideos } from '../elementos/Resumen-curso'
import { ClickModulo } from '../hooks/ClickModulo';
import { useFetchVideo } from '../hooks/useFetchVideo';
import TituloVideo from './TituloVideo'
export default function TituloDelModulo ({pos,nombre,id_modulo,style}){
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
                    videos.map(video=> <TituloVideo {...video}/>) 
                    :
                    <span>Modulo sin contenido ☹</span>
                    :
                    <></>
                 } 

                </>
        )
}