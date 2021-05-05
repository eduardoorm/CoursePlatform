import React, { useState,useEffect } from 'react'
import { ContainerModulos,TituloCenter} from '../elementos/Resumen-curso'
import TituloDelModulo from './TituloModulo'
import { useFetchModulo} from '../hooks/useFetchModulo'
import { useParams } from 'react-router'

export default function ResumenCurso (props){  
  const {id} = useParams();

  const{dataModulos:modulos}= useFetchModulo(id);
    return(
        <section>
          <TituloCenter>Resumen del curso</TituloCenter>           
          <ContainerModulos>    
          {modulos?.map((item,i)=><TituloDelModulo pos={i+1} key={i+1} {...item}/>)}                 
          </ContainerModulos>
        </section>
    )
}