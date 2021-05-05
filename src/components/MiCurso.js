import React from 'react'
import './ComponentStyles/MiCurso.css'
export const MiCurso = ({nombre,duracion,descripcion}) => {
    return (
        <div className="container-MisCursos">
            <div className="contenedor_imgMisCursos">
              <img className="img_MisCursos" src="./assets/img/profesor1.jpg"/>
            </div>
            <div className="MisCursos_column2">
                <div className="MisCursos_column2_item1">
                  <h3>{nombre}</h3>
                  <p>{descripcion}</p>
                </div>    
                <div className="MisCursos_column2_item2">
                  <button className="btn-verCurso">Ver curso</button> 
                </div>           
            </div> 
            
         </div>
    )
}
