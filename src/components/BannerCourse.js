import {ContainBannerCurso,BannerCurso,TextBannerCurso,EmpezarYa,ImgBannerCurso,ImgBanner,ImgFilter,ContenedorBanner} from '../elementos/Banner-curso'
import {Link} from 'react-router-dom'
import profesorImg from '../assets/img/profesor1.jpg'
 export default function BannerCourse ({descripcion,nombre}){
       return(
           <>
           <ContenedorBanner> 
           <ImgFilter></ImgFilter>
             <ContainBannerCurso>
                 <BannerCurso>
                     <TextBannerCurso>
                         <h3>{nombre}</h3> <br/>
                        <p>{descripcion}</p>
                        <Link to="/checkout"><EmpezarYa>Empezar ya</EmpezarYa> </Link>
                     </TextBannerCurso>
                     <ImgBannerCurso>
                        <ImgBanner src="../assets/img/profesor1.jpg" alt=""/>
                     </ImgBannerCurso>
                 </BannerCurso>
             </ContainBannerCurso>
             </ContenedorBanner>
           </>
       )

}
