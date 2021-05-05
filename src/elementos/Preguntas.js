import styled from 'styled-components';

const IdPreguntasfrecuentes = styled.div `
     display: flex;
     align-items: center;
     justify-content: center;
     width: 100%;
     margin:auto;
     height:100vh;
     margin-bottom:50px;
     color:#3C3B37;
     padding:1em;
     @media (max-width: 550px) {
        width:auto;
  }
`
const Label = styled.label `
    padding-left: 1.3em;
    position:relative;
    font-size:80%;
    display:block;
    font-weight: 600;
    cursor:pointer;
    &:before {
    content:'';
    margin:4px 0px;
    border-radius: 3px;
    width: 0.8em;
    height: 0.8em;
    position: absolute;
    content:'\f105';
    color:#3256D5;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    left: 0px;
    transition: all 0.1s;
    transform: rotate(0deg);
    }
`;

  

const Respuesta= styled.p `
   padding: 1em 0em 0em 1.5em;
   font-size:80%;
   color:black;
`


export {IdPreguntasfrecuentes,Label,Respuesta} 