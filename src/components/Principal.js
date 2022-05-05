import {Banner,TitleBanner,ContTextBanner,TextBanner,ImgStatic} from '../elementos/Banner'
import {Btn} from './Button'
import {Section,TituloSeccionUltimos } from '../elementos/Section'
import Course from './Course'
import {ContInstructor, BtnEmpiezaEnseniar, TextContInstructor, ImgContInstructor, ImgTeacher, TituloContInstructor,ParrafoContInstructor} 
from '../elementos/Banner-Instructor'
import Question from './PreguntasFrecuentes'
import {Link} from 'react-router-dom'
import {IdPreguntasfrecuentes} from '../elementos/Preguntas'
import { useFetchUltimosCurso } from '../hooks/useFetchUltimosCurso';
import { UserContext } from '../store/UserContext';
import { useContext, useEffect } from 'react'
import { UseFecthUsuario } from '../hooks/useFecthUsuario'
import './ComponentStyles/Course.css'
import './ComponentStyles/ImgScroll.css'

function Principal() {
   const {dataCursos:curso} = useFetchUltimosCurso();
   const {user,setUser} = useContext(UserContext)
   console.log(user);
   const {data} = UseFecthUsuario()

   useEffect(() => {
    setUser(data)
  }, [data])

   return (
    <>
     
    <Banner>
        <ContTextBanner> 
        <TitleBanner>Learn something new every day</TitleBanner>
        <TextBanner>
          Ambition accepted . Learn the lastest skills tor achieve your career goals.
        </TextBanner>
       <Link to="/collections">
        <Btn 
            style="btnBanner-now"
            value="¡Learn Now!"
          />
       </Link> 
        <Btn 
          style="btnBanner-more"
          value="More info"
        />
        </ContTextBanner>
    </Banner>

  <Section>
    
    { (user) &&
      <div className="boxWelcome">
      <h2 className="welcomeUser">¡Welcome<span className="user-Upper"> {user.nombre}!</span></h2>
      </div>}
  
   <TituloSeccionUltimos>Last Courses published</TituloSeccionUltimos>

      <div id="container-flex-cursos">
        {curso?.length === 0 ?
          <h1>loading...</h1>
          :
          curso?.map(curso =>
            <>
            <Link to={`/course/${curso?.ruta}`}>
              <Course style={"container-curso"} 
                key={curso?.id}
                duracion={curso?.duracion} 
                categoria={curso?.categoria}
                tituloCurso={curso?.nombre}
                lecciones={curso?.lecciones}
                imagen={curso?.imagen}
                nombreInstructor={curso?.nombreInstructor}
                apellidoInstructor={curso?.apellidoInstructor}
                />
            </Link>     
            </>
          )
        }
      </div>

    <Link to="/collections">
                <Btn
                style="btn-default"
                value="View All Courses"
                />
    </Link>

    </Section>

    <ContInstructor>
          <ImgContInstructor>
            <ImgTeacher src="./assets/img/teacher.jpg"></ImgTeacher>
          </ImgContInstructor>

          <TextContInstructor>
               <TituloContInstructor>Become an instructor</TituloContInstructor>
               <ParrafoContInstructor>The best instructors from all over word teach thounsands of students at "Let's Learn".
                We have a great working environment and we provide the tools you need to improve every day.  
                </ParrafoContInstructor>
                <Link to="/teaches"><BtnEmpiezaEnseniar>Start teaching today</BtnEmpiezaEnseniar> </Link>
          </TextContInstructor>

    </ContInstructor>


        <IdPreguntasfrecuentes>
          <div className="containerPF">
          <h2>Frecuent Questions</h2> <br/><br/>
          <Question
          id="question1"
          rpta ="At least one new one every month, although we always try to do more!😋"
          labelText="Will there be new courses?"
           for= "question1"
          /> 

          <Question
           id="question2"
           rpta ="No problem, we accept payments from all over the world and in any currency. 😁"
           labelText="Can I pay with other currency than euros and from any country?"
           for= "question2"
          /> 
          <Question
          id="question3"
          rpta= "At the moment only in a few, but we are working like little ants to have them in all courses! 👀"
          labelText="Will I receive any degree for finishing the courses?"
           for= "question3"
          /> 
          <Question
          id="question4"
          rpta= "We help you 24/7 in the support chat, bottom right anywhere on our website, or by sending an email to _____ 🤖"
          labelText="Where do I ask for help?"
           for= "question4"
          /> 
          <Question
          id="question5"
          rpta= "They are videos, slides, texts and everything you need for you to learn the most! 💪"
          labelText="What are the Intesla courses like?"
           for= "question5"
          /> 
           <Question
          id="question6"
          rpta= "Like if you want to do them all at once... if you're really crazy of course. 😆"
          labelText="Can I do more than one course at a time?"
           for= "question6"
          /> 

      

          </div>
   </IdPreguntasfrecuentes> 

        <ImgStatic/>
    </>
  );
}

export default Principal;