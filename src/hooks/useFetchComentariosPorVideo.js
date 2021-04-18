import React, { useContext, useEffect, useState } from 'react'
import {getComentariosPorVideo} from '../helpers/getComentariosPorVideo'
import { Context } from '../store/UseContextComment';
export const useFetchComentariosPorVideo = (id,comment) => {
     console.log("se actualiza",comment);
       const [comentPorVideo, setComentPorVideo] = useState({
           dataComentPorVideo:[],
            // ára que encapsulas en un objecto la lista?
       });
       // primero lo set aqui y lo llamo en el video comp

       useEffect(()=>{
        getComentariosPorVideo(id)
        .then(comentarios=>{
            setComentPorVideo({
                dataComentPorVideo:comentarios
            })
        })
        console.log("se volvio a renderizar")
       },[])


       
    return comentPorVideo; // dame un tur por la parte especifica y muestrame la app corriendo.
    /**
     * ok PRIMERO LA APP ES UNA APP DE VENTA DE CURSOS ONLINE /*POSTDATA: SI ABURRO ME DICES PARA YA IR AL GRANO XD
     * 
     * 
     */
}