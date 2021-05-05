import styled from 'styled-components'

const ContainerModulos = styled.div `
    width: 650px;
    margin:  0.5em auto ;
    margin-bottom: 5em;
    @media (max-width: 768px) {
    width: auto;
  }
`
const ContainerHeaderModulo= styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #F2F2F2;
    border-radius:6px;
    padding: 0px 2em;
    margin-top:0.4em;
    margin-left:0.4em;
    margin-right:0.4em;
`
const FlechaModulo = styled.div `

`
const ContainerTituloModulo = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.8em 0em;
`
const TituloCenter = styled.h2 `
   margin-top:2em;
   width:100%;
   text-align:center;
`
const NumeroTitulo = styled.span `
   margin-right: 1em;
   font-size:14px;
`

const BtnModulo  = styled.label `
    position:relative;
    font-size:80%;
    display:block;
    font-weight: 600;
    width:1em;
    height:2em;
    padding-top:0.2em;
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
    transition: all 0.2s;
    transform: rotate(0deg);
    }
`
const TituloModulo = styled.p `
  font-weight: 600;
`

//----- contenido modulo------------
const ContenidoModulo = styled.div `
 padding:0.7em;
 padding-left:2em;
`
const TxtContenidoModulo = styled.div `
    font-size: 80%;
    font-weight: 600;
    
   
`

const ContainerVideos = styled.div `

`

const Desaparecer = styled.div `
  display:none;
`
export {
    ContainerModulos,
    ContainerTituloModulo,
    TituloCenter,
    NumeroTitulo,
    BtnModulo ,
    TituloModulo ,
    ContenidoModulo,
    TxtContenidoModulo,
    ContainerHeaderModulo,
    FlechaModulo,
    ContainerVideos,
    Desaparecer
} 