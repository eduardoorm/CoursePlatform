import React from 'react'

export const getCategoria = async() => {
    const url = "http://localhost:3001/getCategorias";
    const respuesta =await fetch(url);
    const categorias = await respuesta.json();
    const categoria = categorias.map(item=>{
       return { 
           id : item.id_categoria,
          nombre: item.nom_cate
       }
    })
    return categoria

}
