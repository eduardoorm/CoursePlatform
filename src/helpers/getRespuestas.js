import React from 'react'
export const getRespuestas =async (id) => {
    const url = `http://localhost:3001/getRespuestas/${id}`;
    const response =  await fetch(url);
    const res = await response.json();

    const responseID = res.map(r=>{
        return{
            name: r.name,
            lastname:r.lastname,
            response: r.response,
            date: '12,12,12',
            commentID: r.id_comment,
            id_person: r.id_person,
            id_response: r.id_response,
            imageUrl: r.imageUrl,
        }
    })
    return responseID;
}
