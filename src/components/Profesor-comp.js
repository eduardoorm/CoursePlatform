import {Titulocenter,TextCenter,ContainerBioProfesor,ImgProfileProfesor,ContTextBio,Text} from '../elementos/Profesor'
import React , {Component} from 'react'

export default class Profesor extends Component {
  
    constructor(props){
       super(props)
   }

   render(){
       return(
           <section className="profesor">
           <Titulocenter>Profesor</Titulocenter>
           <TextCenter>Erick imparte este curso</TextCenter>
           <ContainerBioProfesor>
               <ImgProfileProfesor src="assets/img/profesorPerfil.png"></ImgProfileProfesor>
               <ContTextBio>
                 <h3>Erick Romucho</h3>
                 <Text>Graduado en Diseño y Producción de Videojuegos en la UPF y Desarrollo de Aplicaciones Multiplataforma. 
                Gran amante de los videojuegos desde que obtuvo su primera Nintendo Gameboy a los 7 años. Cuenta con años
                de experiencia en el sector de los videojuegos. Ha trabajado en grandes proyectos como el premiado juego
                "3 Minutes to Midnight" de Scarecrow Studios. Especializado en programación C# y el motor de juegos Unity.
                Su otra gran afición que le hace despegar los ojos de la pantalla es la música. Actúa profesionalmente 
                como músico (Guitarrista de Jazz Manouche) en Barcelona principalmente.
                </Text>
                <a href="#">Email</a>
               </ContTextBio>
           </ContainerBioProfesor>
           </section>
       )
   }

} 
