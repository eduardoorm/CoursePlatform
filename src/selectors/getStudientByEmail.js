import React from 'react'
import { useFetchGetEstudiante } from '../hooksAdmin.js/useFetchGetEstudiante'

export const getStudientByEmail = (email='',estudiantes) => {
    if(email ===''){
        return [];
    }
    email = email.toLocaleLowerCase();
    return estudiantes.filter(item => item.email === email )
}
