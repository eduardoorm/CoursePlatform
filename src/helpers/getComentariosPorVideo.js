
export const getComentariosPorVideo =async (id) => {
    
    const url = `http://localhost:3001/getComentariosPorVideo/${id}`;
    const respuesta =  await fetch(url);
    const res = await respuesta.json();
    
    const convertirFecha=(date)=>{
        const fecha= new Date(date)
        const fecha_respuesta= `${fecha.getUTCFullYear()}-${fecha.getMonth()+1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}h`
        return fecha_respuesta;
     }

    
    const respuestaID = res.map(r=>{
        return{
            id_comentario: r.id_comentario,
            id_persona:r.id_persona,
            id_curso: r.id_curso,
            id_video: r.id_video,
            comentario: r.comentario,
            fecha: convertirFecha(r.fecha_comentario),
            likes: r.likes_coment,
            nombre: r.nombre,
            apellido:r.apellidos,
        }
    })
    return respuestaID;
}
