
export const getComentariosPorVideo =async (id) => {
    
    const url = `http://localhost:3001/getComentariosPorVideo/${id}`;
    const respuesta =  await fetch(url);
    const res = await respuesta.json();
    
    const responseID = res.map(r=>{
        return{
            id_comment: r.id_comment,
            id_person:r.id_person,
            id_course: r.id_course,
            id_video: r.id_video,
            comment: r.comment,
            date: '12/12/12',
            likes: r.likes_comment,
            name: r.name,
            lastname:r.lastname,
            imageUrl: r.imageUrl,
        }
    })
    return responseID;
}
