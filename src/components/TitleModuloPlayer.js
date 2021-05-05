import React , { useState} from 'react'
import { ContainerTituloModulo,NumeroTitulo,BtnModulo,TituloModulo} from '../elementos/Resumen-curso'
import { BoxTitleVideoModulo } from '../elementos/VideoElements';
import { useFetchVideo } from '../hooks/useFetchVideo';
import { TitleVideoPlayer } from './TitleVideoPlayer';

export const TitleModuloPlayer = ({pos,nombre,id_modulo}) => {
    const [showVideos, setShowVideos] = useState(true)
    const collapseVideos=()=> setShowVideos(!showVideos);
    const {dataVideos:videos} = useFetchVideo(id_modulo);
    return (
        <>
        <BoxTitleVideoModulo>    

           <ContainerTituloModulo>
               <NumeroTitulo>{pos}.</NumeroTitulo>   
               <TituloModulo>{nombre}</TituloModulo>
           </ContainerTituloModulo> 
         
           <BtnModulo onClick={collapseVideos} ></BtnModulo>
        </BoxTitleVideoModulo>
        
        {(showVideos) ?
           (videos.length>0) ?
           videos.map(video=> <TitleVideoPlayer key={video.nombre} {...video}/>) 
           :
           <span>Modulo sin contenido ☹</span>
           :
           <></>
        } 

       </>
    )
}
