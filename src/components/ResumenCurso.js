import { ContainerModulos,TituloCenter} from '../elementos/Resumen-curso'
import TituloDelModulo from './TituloModulo'
import { useFetchVideo } from '../hooks/useFetchVideo'
import { useFetchModulo} from '../hooks/useFetchModulo'
import { useParams } from 'react-router';

export default function ResumenCurso (props){  
         const {id} = useParams();
         const{dataModulos:modulos}= useFetchModulo(id);
            return(
                <section>
                  {/* {
                    videos.map((el)=><h1>{el.nombre}</h1>)
                  } */}
                <TituloCenter>Resumen del curso</TituloCenter>           
                <ContainerModulos>    
                 {modulos.map((item,i)=><TituloDelModulo pos={i+1} {...item}/>)}                 
                </ContainerModulos>
            </section>
            )
        
}