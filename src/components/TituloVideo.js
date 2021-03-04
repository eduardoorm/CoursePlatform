import React , {Component} from 'react'
import { ContenidoModulo,TxtContenidoModulo } from '../elementos/Resumen-curso'

    
const ListVideo =(props)=>{
    const listItems = props.titleVideo;
    if(!listItems) return (<span>Modulo sin contenido ☹  </span>) 
    const variable = listItems.map((el)=><p><i className="fas fa-lock"></i> {el}</p>)
    return(
        <>
        {variable}
        </>
    )
  }

export default class TituloVideo extends  Component{
 
    
    constructor(props){
        super(props)  
    }


    render(){
        return(
                <>
                
                 <ContenidoModulo >
                 <span className="item-contenido-modulo">
                <TxtContenidoModulo> 
                     <ListVideo titleVideo={this.props.titleVideo}></ListVideo>
                    </TxtContenidoModulo>
                </span>
                 </ContenidoModulo>
                 </>
        )
    }
}