import React ,{Component} from 'react';
import './Button.css'
import styled from 'styled-components';

export const Btn = (props) =>{
     return(
        <button className={props.style} type={props.type}>{props.value}</button>
     );
}





