import React ,{Component} from 'react';
import './Course.css'
import {Link} from 'react-router-dom'


class Course extends Component{
  constructor (props)
  {
    super(props)
  }

  render(){
      return(    
<Link to="/course">
       <div className={this.props.style}>
     
          <div className="curso-img">
              <img src="assets/img/profesor1.jpg" alt="imagen-del-curso" className="curso-img-img"/>
          </div>
          <div className="curso-titulo">
            <p>{this.props.tituloCurso}</p>
            </div>
          <div className="curso-profesor">
            <p>{this.props.profesor}</p> 
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
            <p>{this.props.cantLecciones} Lecciones + de {this.props.duracion} horas </p>
            
            <div className="Categoria">
            <img src="https://cdn-themes.thinkific.com/220744/355269/xuDKHHDLTbOjZzxYtKLK_category__software.svg" 
              className="img-categoria"></img>
              <p>{this.props.categoria}</p>
            </div>

          </div>
      </div>
      </Link>
      )
  }
}

export default Course;