import React ,{Component} from 'react';
import './ComponentStyles/Button.css'
import styled from 'styled-components';

export const Btn = (props) =>{
     return(
        <button className={props.style} type={props.type} onClick={props.onClick}>{props.value}</button>
     );
}





