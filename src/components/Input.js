import React ,{Component} from 'react';
import './Input.css'
  
class Input extends Component {
    constructor(props){
      super(props);     
    }
    
    render(){
        return(
            <>
            <input type={this.props.type} name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} value={this.props.value}
             className={this.props.style} onClick={this.props.onClick}/>
            </>
            )
    }
}

export default Input;