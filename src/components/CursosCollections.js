import React from 'react'
import './ComponentStyles/MiCurso.css'
export const CursosCollections = ({nombre,descripcion,precio}) => {
    return (
        <>
         <div className="container-MisCursos" >
            <div className="contenedor_imgMisCursos">
              <img className="img_MisCursos" src="./assets/img/profesor1.jpg"/>
            </div>
            <div className="MisCursos_column2">
                <div className="MisCursos_column2_item1">
                  <h3>{nombre}</h3>
                  <i className="fa fa-star review__star" id="start-CursoCollection"></i>
                  <i className="fa fa-star review__star" id="start-CursoCollection"></i>
                  <i className="fa fa-star review__star" id="start-CursoCollection"></i>
                  <i className="fa fa-star review__star" id="start-CursoCollection"></i>
                  <i className="fa fa-star review__star" id="start-CursoCollection"></i> 
                  <p className="txt_CursoCollection">{nombre}</p>
                  <p className="txt_Acceso">¡Acceso de por vida!</p>           
                  <p ><span className="precio_CursoCollection">${precio} USD</span><del className="precio_antiguo"> $50 USD</del> </p> 
                </div>    
                <div className="MisCursos_column2_item2">
                  <button className="btn-ComprarCurso">Comprar Curso</button> 
                </div>           
            </div> 
            
         </div>
         </>
    )
}
