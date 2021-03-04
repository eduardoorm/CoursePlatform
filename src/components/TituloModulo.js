import React , {Component} from 'react'
import { ContainerTituloModulo,NumeroTitulo,BtnModulo,TituloModulo,ContainerHeaderModulo,ContainerVideos } from '../elementos/Resumen-curso'
import TituloVideo from './TituloVideo'
import { ContenidoModulo,TxtContenidoModulo } from '../elementos/Resumen-curso'
export default class TituloDelModulo extends  Component{
    constructor(props){
        super(props)
    this.state={
       modulo:false
    }
    this.collapseVideos = this.collapseVideos.bind(this)
    }

    collapseVideos=()=>{
        if(this.state.modulo){
            this.setState({
                modulo:false
            })
        }else{
            this.setState({
                modulo:true
            })
        }
    }

    render(){
        return(  
                 <>
                 <ContainerHeaderModulo >
                
                    <ContainerTituloModulo>
                        <NumeroTitulo>{this.props.NumModulo}</NumeroTitulo> <TituloModulo>{this.props.titleModulo}</TituloModulo>
                    </ContainerTituloModulo> 
                    <BtnModulo onClick={this.collapseVideos} ></BtnModulo>
                  
                 </ContainerHeaderModulo>
                 {(this.state.modulo) ? <TituloVideo titleVideo={this.props.titleVideo}></TituloVideo> : <p/>} 
                </>
        )
    }
}