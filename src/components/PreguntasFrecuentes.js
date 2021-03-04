import React , {Component} from 'react';
import Input from './Input'
import {Label,Respuesta} from '../elementos/Preguntas'


function CollapseRespuesta(props){
    return (<Respuesta>{props.rpta}</Respuesta>);
}

function CollapseNegativo(){
    return (<span></span>);
}

function LabelPregunta(props){
    return(<Label htmlFor={props.for}>{props.labelText}</Label>)
}
 

class Preguntas extends Component {
      constructor(props){
          super(props)

          this.state={
              collapse:false,
          }

          this.clickPregunta = this.clickPregunta.bind(this);
      }
    
      clickPregunta = () =>{
          if(this.state.collapse===true){
            this.setState({
                collapse:false,
            })
          }else{
            this.setState({
                collapse:true,
            })
          }     
      }
    render(){
        return(   
         <>
            <Input 
              type="checkbox" name="" id={this.props.id} style="inputCheckbox" onClick={this.clickPregunta}
            />
            <LabelPregunta labelText={this.props.labelText} for={this.props.for}></LabelPregunta>
            {(this.state.collapse) ? <CollapseRespuesta rpta={this.props.rpta}/> : <CollapseNegativo/>}
             <br/>
         </>  
        )
    }

}

export default Preguntas;