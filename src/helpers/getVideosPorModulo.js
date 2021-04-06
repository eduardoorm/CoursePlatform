
export const getVideosPorModulo = async (id_modulo) => {

    const url = `http://localhost:3001/getVideosPorModulo/${id_modulo ? id_modulo : 0}`;
    const respuesta = await fetch(url);
    const res = await respuesta.json();
    const videos = res.map(item=>{
        return{
           id_video  :  item.id_video,
           nombre    :  item.nom_video,
           duracion  :  item.dura_video,
           id_modulo :  item.id_modulo,
           id_curso  :  item.id_curso,
           descripcion: item.des_video,
           ruta_curso: item.ruta_curso,
           ruta_video: item.ruta_video,
        }
    })
    return videos
}
