import {ContainBannerCurso,BannerCurso,TextBannerCurso,EmpezarYa,ImgBannerCurso,ImgBanner,ImgFilter,ContenedorBanner} from '../elementos/Banner-curso'
import React ,{Component} from 'react';
import {Link} from 'react-router-dom'

export default class BannerCourse extends Component{
   constructor(props){
       super(props);
   }

   render(){
       return(
           <>
           <ContenedorBanner> 
           <ImgFilter></ImgFilter>
             <ContainBannerCurso>
                 <BannerCurso>
                     <TextBannerCurso>
                         <h3>¡Crea tu primer videojuego First Person Shooter!</h3> <br/>
                        <p>¿Te gustan los videojuegos de disparos en primera persona? ¡En este curso aprenderás
                         a hacer un videojuego del género First Person Shooter (FPS) totalmente desde 0! Usaremos 
                         Unity y programaremos en el lenguaje C# para aprender las bases que tien</p>
                        <Link to="/checkout"><EmpezarYa>Empezar ya</EmpezarYa> </Link>
                     </TextBannerCurso>
                     <ImgBannerCurso>
                        <ImgBanner src="assets/img/profesor1.jpg" alt=""/>
                     </ImgBannerCurso>
                 </BannerCurso>
             </ContainBannerCurso>
             </ContenedorBanner>
           </>
       )
   }

}
