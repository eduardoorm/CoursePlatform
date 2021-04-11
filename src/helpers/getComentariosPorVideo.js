
export const getComentariosPorVideo =async (id) => {
    if(!localStorage.getItem("token")) return alert ("registrate")
    const {token} = JSON.parse(localStorage.getItem("token"));
    
    const url = `http://localhost:3001/getComentariosPorVideo/${id}`;
    const respuesta =  await fetch(url);
    const res = await respuesta.json();
    const respuestaID = res.map(r=>{
        return{
            id_comentario: r.id_comentario,
            id_persona:r.id_persona,
            id_curso: r.id_curso,
            id_video: r.id_video,
            comentario: r.comentario,
            fecha: r.fecha_comentario,
            likes: r.likes_coment,
            nombre: r.nombre,
            apellido:r.apellidos,
        }
    })
    return respuestaID;
}
