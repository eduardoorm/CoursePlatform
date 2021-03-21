import React ,{Component} from 'react';
import './ComponentStyles/Input.css'
  
class Input extends Component {
    constructor(props){
      super(props);     
    }
    
    render(){
        return(
            <>
            <input type={this.props.type} name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} value={this.props.value}
             className={this.props.style} onClick={this.props.onClick} readOnly={this.props.readOnly} onInput={this.props.onInput} onChange={this.props.onChange}
             defaultValue={this.props.defaultValue} disabled={this.props.disabled} required={this.props.required}/>
            </>
            )
    }
}

export default Input;