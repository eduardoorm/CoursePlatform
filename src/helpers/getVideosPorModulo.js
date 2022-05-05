
export const getVideosPorModulo = async (id_modulo) => {

    const url = `http://localhost:3001/getVideosPorModulo/${id_modulo ? id_modulo : 0}`;
    const response = await fetch(url);
    const res = await response.json();
    const videos = res.map(item=>{
        return{
            id_video  :  item.id_video,
            name    :  item.name_video,
            duration :  item.duration_video,
            id_course  :  item.id_course,
            description: item.description_video,
            url_course: item.url_course,
            url_video: item.url_video,
        }
    })
    return videos
}
