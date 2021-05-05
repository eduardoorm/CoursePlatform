import React, {useEffect } from 'react'
import {getComentariosPorVideo} from '../helpers/getComentariosPorVideo'

export const useFetchComentariosPorVideo = (id, dispatch) => {
       useEffect(()=>{
        getComentariosPorVideo(id)
        .then(payload=>{
            dispatch({
                type: 'LOAD_COMMENTS', payload
            })
        })
       },[id])

}