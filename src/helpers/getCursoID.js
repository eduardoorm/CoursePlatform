import React from 'react'

export const getCursoID = async (id) => {
    
    const url=`http://localhost:3001/getCursoID/${id}`;
    const response = await fetch(url);
    const courses = await response.json();
  
    const course = courses.map(course=>{
        return {
            id: course.id_course,  
            name: course.name_course,
            description: course.description_course,
            duracion: course.duration_course,
            price: course.rice_course,
            date: course.date_course, 
            id_category: course.id_category,
            url_course: course.url_course,
            image: course.image,
            teacher: course.teacher,
            
           }   
    }) 
    return course;
}
