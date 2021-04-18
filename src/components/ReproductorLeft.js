import React from 'react'
import {Link} from 'react-router-dom';
import TituloDelModulo from './TituloModulo';

export const ReproductorLeft = ({modulos}) => {
    return (
        <div className="reproductor-left">
            <div className="container_txt_ClasesDelCurso">
            <Link to="/"><i className="fas fa-arrow-left"></i></Link> 
             <p className="txt_clasesDelCurso">Clases del Curso</p>
            </div>
           <div >
              {
                modulos.map(
                (el,pos)=><TituloDelModulo key={el.nombre} pos={pos+1} {...el}/>
                )}
            </div>
          </div>
    )
}
