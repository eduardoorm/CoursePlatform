import React, { useEffect,useState } from 'react'
import { getUltimosCursos } from '../helpers/getUltimosCursos'

export const useFetchUltimosCurso = () => {
    const [lastCourses, setlastCourses] = useState({
        dataCourses:[],
    })

 

    return lastCourses
}
