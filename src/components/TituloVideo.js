import { ContenidoModulo,TxtContenidoModulo } from '../elementos/Resumen-curso'
import {Link} from 'react-router-dom'
const ListVideo =({nombre,duracion})=>{
    if(!nombre) return (<span>Modulo sin contenido ☹</span>)   
    return(
      <p><i className="fas fa-lock"></i> {nombre} </p>
    )
  }

  const refresh=()=>{
    setTimeout(() => {
      window.location.reload();
    }, 0.1);

  }
  
export default function TituloVideo ({id_video ,nombre,duracion ,id_modulo,id_curso,ruta_curso,ruta_video}){ 
        return(             
          <Link to={`/course/${ruta_curso}/${ruta_video}`} onClick={refresh}>
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