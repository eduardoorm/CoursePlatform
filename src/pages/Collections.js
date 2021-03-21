import Course from '../components/Course'
import {Link} from 'react-router-dom'
import { useFecthCurso } from '../hooks/useFecthCurso';
import { CursosCollections } from '../components/CursosCollections';
function Collections(){
    const {dataCurso:cursos} = useFecthCurso()
    return(
    <>   
          <h1 className="titulo_Cursos">Todos los Cursos</h1>
          <div id="container-flex-cursos">
       
        {cursos.length === 0 ?
          <h1>cargando...</h1>
          :
          cursos.map(curso=>
            <>
            <Link to= {`/course/${curso.id}`}>
            <CursosCollections
             {...curso}
               />
            </Link>
            </>
          ) 
        }
        </div>
    </>
    )
}

export default Collections;