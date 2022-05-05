import {Titulocenter,TextCenter,ContainerBioProfesor,ImgProfileProfesor,ContTextBio,Text} from '../elementos/Profesor'
import React , {Component} from 'react'

export default function Profesor(props)  {
  
       return(
           <section className="profesor">
           <Titulocenter>Profesor</Titulocenter>
           <TextCenter>Erick imparte este curso</TextCenter>
           <ContainerBioProfesor>
               <ImgProfileProfesor src="/assets/img/profesorPerfil.png"></ImgProfileProfesor>
               <ContTextBio>
                 <h3>Eduardo Ormeño</h3>
                 <Text>Graduated in Video Game Design and Production at UPF and Multiplatform Application Development. 
                Great lover of videogames since he got his first Nintendo Gameboy at the age of 7. He has years
                of experience in the videogame industry. He has worked on major projects such as the award-winning game
                "3 Minutes to Midnight" by Scarecrow Studios. He specializes in C# programming and the Unity game engine.
                His other great hobby that makes him take his eyes off the screen is music. He performs professionally as a musician 
                as a musician (Jazz Manouche Guitarist) in Barcelona, Spain, mainly.
                </Text>
                <a href="#">Email</a>
               </ContTextBio>
           </ContainerBioProfesor>
           </section>
       )
   }

 
