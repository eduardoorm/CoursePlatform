import React , {Component, useState} from 'react';
import Input from './Input'
import {Label,Respuesta} from '../elementos/Preguntas'


function CollapseRespuesta(props){
    return (<Respuesta>{props.rpta}</Respuesta>);
}


function LabelPregunta(props){
    return(<Label htmlFor={props.for}>{props.labelText}</Label>)
}
 

function Preguntas (props) {

   const [collapse, setCollapse] = useState(false)
    
     const clickPregunta = () =>{
          setCollapse(!collapse)
      }


        return(   
         <>
            <Input 
              type="checkbox" name="" id={props.id} style="inputCheckbox" onClick={clickPregunta}
            />
            <LabelPregunta labelText={props.labelText} for={props.for}></LabelPregunta>
            {(collapse) && <CollapseRespuesta rpta={props.rpta}/> }
             <br/>
         </>  
        )

}

export default Preguntas;