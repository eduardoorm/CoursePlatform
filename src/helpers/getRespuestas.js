import React from 'react'
export const getRespuestas =async (id) => {
    const url = `http://localhost:3001/getRespuestas/${id}`;
    const respuesta =  await fetch(url);
    const res = await respuesta.json();
    const convertirFecha=(date)=>{
        const fecha= new Date(date)
        const fecha_respuesta= `${fecha.getUTCFullYear()}-${fecha.getMonth()+1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}h`
        return fecha_respuesta;
     }
    const respuestaID = res.map(r=>{
        return{
            nombre: r.nombre,
            apellido:r.apellidos,
            respuesta: r.respuesta,
            fecha: convertirFecha(r.fecha_respuesta),
            comentarioID: r.id_comentario,
            id_persona: r.id_persona,
            id_respuesta: r.id_respuesta,
            imageUrl: r.imageUrl,
        }
    })
    return respuestaID;
}
