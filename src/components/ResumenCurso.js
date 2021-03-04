import { ContainerModulos,TituloCenter,  ContainerVideos} from '../elementos/Resumen-curso'
import TituloDelModulo from './TituloModulo'
import TituloVideo from './TituloVideo'
import React , {Component} from 'react'
import {BtnModulo} from '../elementos/Resumen-curso'

export default class ResumenCurso extends  Component{
        constructor(props){
            super(props)
        }

        render(){
            return(
                <section>
                <TituloCenter>Resumen del curso</TituloCenter>
                
                <ContainerModulos>               
                  <TituloDelModulo
                    NumModulo= {1}
                    titleModulo="¡Bienvenidos al curso!"
                    titleVideo={
                      ["¡Bienvenidos al curso!",
                      "¿Qué es un Sistema Operativo?",
                      "Algunos vídeos sobre el tema",
                      "¿Qué es Linux?"]
                    }
                  >      
                  </TituloDelModulo>    
                </ContainerModulos>

                <ContainerModulos>
                  <TituloDelModulo 
                    NumModulo= {2}
                    titleModulo="Instalación de Ubuntu"
                    titleVideo={
                      [   
                      "Primer contacto con la terminal en Linux",
                      "Cómo moverse en la terminal",
                       "Otros comandos básicos",
                       "Uso de opciones en los comandos",
                       "Solucionando el ejercicio 1",
                       "Algunos detalles sobre los comandos",
                       "Más comandos útiles",
                      ]
                    }
                    >
                    </TituloDelModulo>       
                </ContainerModulos>

                <ContainerModulos>
                  <TituloDelModulo 
                   NumModulo={3}  
                   titleModulo="Introducción a la Terminal y Línea de Comandos"
                    titleVideo={
                      [   
                        "Superusuario (root) en Linux",
                        "Configurando GRUB en Ubuntu",
                        "Cómo instalar Software en Ubuntu",
                        "Permisos en Linux",
                        "Enlaces en Linux",
                        "¿Qué hace el comando curl?",
                      ]
                    }
                    >
                    </TituloDelModulo>       
                </ContainerModulos>


                </section>
            )
        }
}