import {ContainBannerCurso,BannerCurso,TextBannerCurso,EmpezarYa,ImgBannerCurso,ImgBanner,ImgFilter,ContenedorBanner} from '../elementos/Banner-curso'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import profesorImg from '../assets/img/profesor1.jpg'
 export default function BannerCourse ({descripcion,nombre}){
    const history = useHistory();
    const checkout  = ()=>{
          axios.post("http://localhost:3001/create-payment")
          .then(({data})=>{
            window.open(`${data.data.links[1].href}`)
            console.log("data",data);
            console.log(data.data.links[1].href);
          }
          
          )
      }
       return(
           <>
           <ContenedorBanner> 
           <ImgFilter></ImgFilter>
             <ContainBannerCurso>
                 <BannerCurso>
                     <TextBannerCurso>
                         <h3>{nombre}</h3> <br/>
                        <p>{descripcion}</p>
                         <EmpezarYa onClick={checkout}>Empezar ya</EmpezarYa> 
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
