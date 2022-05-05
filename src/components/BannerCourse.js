import {ContainBannerCurso,BannerCurso,TextBannerCurso,EmpezarYa,ImgBannerCurso,ImgBanner,ImgFilter,ContenedorBanner} from '../elementos/Banner-curso'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
 export default function BannerCourse ({description,name}){
    const history = useHistory();
    const checkout  = ()=>{
          axios.post("http://localhost:3001/create-payment")
          .then(({data})=>{
            window.open(`${data.data.links[1].href}`)
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
                         <h3>{name}</h3> <br/>
                        <p>{description}</p>
                         <EmpezarYa onClick={checkout}>Start Now</EmpezarYa> 
                     </TextBannerCurso>
                     <ImgBannerCurso>
                        <ImgBanner src="../../public/assets/img/teacher-course" alt=""/>
                     </ImgBannerCurso>
                 </BannerCurso>
             </ContainBannerCurso>
             </ContenedorBanner>
           </>
       )

}
