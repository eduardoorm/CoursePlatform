import BannerCourse from '../components/BannerCourse'
import ResumenCurso from '../components/ResumenCurso'
import React  from 'react'
import { useParams } from 'react-router-dom'
import  {useFecthCursoID} from '../hooks/useFecthCursoID'

export default function Course_Page(){
  const{id} = useParams();
  const {dataCursoID:curso} = useFecthCursoID(id);
        return(
            <>
              <BannerCourse {...curso[0]}/>
              <ResumenCurso {...curso[0]}/>
            </>
        )
}