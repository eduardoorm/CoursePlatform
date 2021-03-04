import '../../App.css'
import Course from '../Course'
import {Banner,TitleBanner,ContTextBanner,TextBanner} from '../../elementos/Banner'
import {Btn} from '../Button'
import {Section,TituloSeccionUltimos } from '../../elementos/Section'
import {ContInstructor, BtnEmpiezaEnseniar, TextContInstructor, ImgContInstructor, ImgTeacher, TituloContInstructor,ParrafoContInstructor} from '../../elementos/Banner-Instructor'
import Preguntas from '../PreguntasFrecuentes'
import {Link} from 'react-router-dom'
import {IdPreguntasfrecuentes} from '../../elementos/Preguntas'
function Home(){
    return (
        <>
      
           <Banner>
           <ContTextBanner> 
              <TitleBanner>Aprende algo nuevo cada día</TitleBanner>
              <TextBanner>Ambición aceptada. Aprende las últimas habilidades para alcanzar tus objetivos profesionales.</TextBanner>
              <Btn 
                style="btnBanner-ya"
                value="¡Aprender YA!"
              />
              <Btn 
                style="btnBanner-mas"
                value="Saber más"
              />
              </ContTextBanner>
            </Banner>
 
        <Section>
           <TituloSeccionUltimos>Últimos cursos publicados</TituloSeccionUltimos>

            <div id="container-flex-cursos">
            
              <Course
              style="container-curso"
              tituloCurso="¡De 0 hasta Maestro Autocat Electrical!"
              profesor="Erick Romucho"
              cantLecciones="13"
              duracion= "5"
              categoria= "Software"
              />
          
            <Course
             style="container-curso"
             tituloCurso="¡Curso Numero 2!"
             profesor="Erick Romucho"
             cantLecciones="13"
             duracion= "5"
             categoria= "Software"
            />
            <Course
             style="container-curso"
             tituloCurso="¡Curso Numero 3!"
             profesor="Erick Romucho"
             cantLecciones="13"
             duracion= "5"
             categoria= "Software"
            />
            </div>
            <Link to="/collections">
            <Btn
            style="btn-default"
            value="Ver Todos los Cursos"
            />
            </Link>
          

        </Section>

        <ContInstructor>
          <ImgContInstructor>
            <ImgTeacher src="./assets/img/teacher.jpg"></ImgTeacher>
          </ImgContInstructor>

          <TextContInstructor>
               <TituloContInstructor>Conviértete en instructor </TituloContInstructor>
               <ParrafoContInstructor>Los mejores instructores de todo el mundo enseñan 
                a miles de estudiantes en Intesla. Proporcionamos las herramientas y
                las habilidades para que enseñes lo que te apasiona.
                </ParrafoContInstructor>
                <BtnEmpiezaEnseniar>Empieza a enseñar hoy mismo</BtnEmpiezaEnseniar>
          </TextContInstructor>

        </ContInstructor>

        <IdPreguntasfrecuentes>
          <h2>Preguntas frecuentes</h2> <br/><br/>

          <Preguntas
          id="pregunta1"
          rpta ="Mínimo uno nuevo cada mes, ¡aunque siempre intentamos hacer más! 😋"
          labelText="¿Habrá cursos nuevos?"
           for= "pregunta1"
          /> 

          <Preguntas
           id="pregunta2"
           rpta ="No hay problema, aceptamos pagos de todo el mundo y en cualquier tipo de moneda. 😁"
           labelText="¿Puedo pagar con otra moneda que no sean euros y desde cualquier país?"
           for= "pregunta2"
          /> 

          <Preguntas
          id="pregunta3"
          rpta= "De momento solo en unos pocos, ¡pero estamos trabajando como hormiguitas para tenerlos en todos los cursos! 👀"
          labelText="¿Recibiré algún titulo por acabar los cursos?"
           for= "pregunta3"
          /> 
          <Preguntas
          id="pregunta4"
          rpta= "Te ayudamos 24/7 en el chat de soporte, abajo a la derecha en cualquier sitio de nuestra web, o enviando un email a _____ 🤖"
          labelText="¿Donde pido ayuda?"
           for= "pregunta4"
          /> 
          <Preguntas
          id="pregunta5"
          rpta= "Son vídeos, diapositivas, textos ¡y todo lo que necesites para qué aprendas al máximo! 💪"
          labelText="¿Cómo son los curso de Intesla?"
           for= "pregunta5"
          /> 
           <Preguntas
          id="pregunta6"
          rpta= "Como si quieres hacerlos todos a la vez… si estás muy loco claro. 😆"
          labelText="¿Puedo hacer más de un curso a la vez?"
           for= "pregunta6"
          /> 
        </IdPreguntasfrecuentes> 
        </>
    )
}

export default Home;