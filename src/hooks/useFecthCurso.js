import React, { useState,useEffect } from 'react'
import { getCursos } from '../helpers/getCursos'

export const useFecthCurso = () => {
    const [courses, setCourses] = useState({
        dataCurso:[],
    })
    return courses;

}
