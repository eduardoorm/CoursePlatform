
export const getModulo = async (id) => {
    const url = `http://localhost:3001/getModulo/${id ? id : 0}`;
    const respuesta = await fetch(url);
    const res = await respuesta.json();
    const modulo = res.map(item=>{
        return{
           id_modulo :  item.id_modulo,
           nombre    :  item.nom_modulo,
           id_curso  :  item.id_curso
        }
    })
    return modulo
}
