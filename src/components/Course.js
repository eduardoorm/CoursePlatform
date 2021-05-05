
import './ComponentStyles/Perfil-comp.css'
import React from 'react';
export default function Course (props){
      return(    
       <div className={props.style}>
          <div className="curso-img">
              <img 
              //aqui falta el src
              alt="imagen-del-curso" className="curso-img-img"/>
          </div>
          <div className="curso-titulo">
            <p>{props.tituloCurso}</p>
          </div>
          <div className="curso-profesor">
            <p>{props.nombreInstructor} {props.apellidoInstructor}</p> 
          </div>
          <div className="curso-acreditado">
            <i className="fa fa-check-circle yt-card-bt"></i><p> Profesor acreditado</p> 
          </div>
          <div className="curso-valoracion">
            <i className="fa fa-star review__star"></i>
            <i className="fa fa-star review__star"></i>
            <i className="fa fa-star review__star"></i>
            <i className="fa fa-star review__star"></i>
            <i className="fa fa-star review__star"></i> 
            <p>(10)</p>
          </div> 
          <div className="curso-pie">
            <p>{props.lecciones} Lecciones + de {props.duracion} horas </p> 
            <div className="Categoria">
            <img src="https://cdn-themes.thinkific.com/220744/355269/xuDKHHDLTbOjZzxYtKLK_category__software.svg" 
              className="img-categoria"></img>
              <p>{props.categoria}</p>
            </div>
          </div>
      </div>
      )
}

