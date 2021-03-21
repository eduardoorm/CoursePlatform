import { ContenidoModulo,TxtContenidoModulo } from '../elementos/Resumen-curso'
import {Link} from 'react-router-dom'
const ListVideo =({nombre,duracion})=>{
    if(!nombre) return (<span>Modulo sin contenido ☹</span>)   
    return(
      <p><i className="fas fa-lock"></i> {nombre}</p>
    )
  }

export default function TituloVideo ({id_video ,nombre,duracion ,id_modulo,id_curso}){ 
        return(             
          <Link to={`/course/${id_curso}/${id_video}`}>
                <ContenidoModulo >
                 <span className="item-contenido-modulo">
                    <TxtContenidoModulo> 
                    <ListVideo nombre={nombre} duracion={duracion}/>
                    </TxtContenidoModulo>
                 </span>
                </ContenidoModulo>  
          </Link>             
        )
}