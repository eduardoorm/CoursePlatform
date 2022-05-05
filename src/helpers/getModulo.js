
export const getModulo = async (id) => {
    const url = `http://localhost:3001/getModulo/${id}`;
    const response = await fetch(url);
    const res = await response.json();
    
    const module = res.map(item=>{
        return{
           id_module :  item.id_module,
           name    :  item.name_module,
           id_course  :  item.id_course
        }
    })
    return module
}
