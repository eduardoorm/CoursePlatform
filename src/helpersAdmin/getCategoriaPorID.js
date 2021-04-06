import React from 'react'

export const getCategoriaPorID = async(id) => {
    const url=`http://localhost:3001/getCategoriasPorID/${id}`;
    const response = await fetch(url);
    const categorias= await response.json();
    const categoria = categorias.map(cate=>{
        return {
            id: cate.id_categoria,  
            nombre: cate.nom_cate,
           }   
    }) 
    return categoria;
}
