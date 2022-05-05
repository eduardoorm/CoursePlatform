import React from 'react'
import {convertToUrl} from '../functions/ConvertToUrl'

export const putCurso = async (form,id) => {
  
    const sendFields ={
        name_course:form.name_course,
        des_course:form.des_course,
        duration_course:form.duration_course,
        prince_course:form.prince_course,
        id_category: form.id_category,
        url_course:convertToUrl(form.name_course),
        course_path: form.course_path,
        lessons: form.lessons,
    }

    if(!localStorage.getItem("token")) return alert ("registrate")
    const {token} = JSON.parse(localStorage.getItem("token"));


     let config ={
        method:"PUT",
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
        },
        body: JSON.stringify(sendFields)
     }
   
      try{    
          const response = await fetch(`http://localhost:3001/putCurso/${id}`,config)
          const res = await response.json();
          if(res.ok){
            return {ok:true}
          }
        }catch{
        console.log();
      }
}
