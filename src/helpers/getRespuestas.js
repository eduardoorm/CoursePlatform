import React from 'react'

export const getRespuestas =async (id) => {
    const url = `http://localhost:3001/getRespuestas/${id}`;
    const respuesta =  await fetch(url);
    const res = await respuesta.json();

    const respuestaID = res.map(r=>{
        return{
            nombre: r.nombre,
            apellido:r.apellidos,
            respuesta: r.respuesta,
            fecha: r.fecha_respuesta,
            comentarioID: r.id_comentario,
            id_persona: r.id_persona,
            id_respuesta: r.id_respuesta,
        }
    })
    return respuestaID;
}
