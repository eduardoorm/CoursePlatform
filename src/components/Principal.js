import {Banner,TitleBanner,ContTextBanner,TextBanner,ImgScroll,ImgStatic} from '../elementos/Banner'
import {Btn} from './Button'
import {Section,TituloSeccionUltimos } from '../elementos/Section'
import Course from './Course'
import {ContInstructor, BtnEmpiezaEnseniar, TextContInstructor, ImgContInstructor, ImgTeacher, TituloContInstructor,ParrafoContInstructor} 
from '../elementos/Banner-Instructor'
import Preguntas from './PreguntasFrecuentes'
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
        <TitleBanner>Aprende algo nuevo cada día</TitleBanner>
        <TextBanner>Ambición aceptada. Aprende las últimas habilidades para alcanzar tus objetivos profesionales.</TextBanner>
       <Link to="/collections">
        <Btn 
            style="btnBanner-ya"
            value="¡Aprender YA!"
          />
       </Link> 
        <Btn 
          style="btnBanner-mas"
          value="Saber más"
        />
        </ContTextBanner>
    </Banner>

  <Section>
    
    { (user) &&
      <div className="boxWelcome">
      <h2 className="welcomeUser">Bienvenido <span className="user-Upper"> {user.nombre} </span></h2>
      </div>}
  
   <TituloSeccionUltimos>Últimos cursos publicados</TituloSeccionUltimos>

      <div id="container-flex-cursos">
        {curso?.length === 0 ?
          <h1>cargando...</h1>
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
                <Link to="/teaches"><BtnEmpiezaEnseniar>Empieza a enseñar hoy mismo</BtnEmpiezaEnseniar> </Link>
          </TextContInstructor>

    </ContInstructor>

    <ImgScroll/>

        <IdPreguntasfrecuentes>
          <div className="containerPF">
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
      

          </div>
   </IdPreguntasfrecuentes> 

        <ImgStatic/>
    </>
  );
}

export default Principal;