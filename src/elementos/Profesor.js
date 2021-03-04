import styled from 'styled-components';

const Titulocenter = styled.h2 `
     text-align: center;
     width: 100%;
`

const TextCenter= styled.p `
     text-align: center;
`
const ContainerBioProfesor = styled.div `
 display: flex;
 width: 900px;
 margin:2em auto ;
 justify-content: center;
`
const ImgProfileProfesor = styled.img `
    width: 20em;
    height: 14em;
    object-fit: cover;
    margin-right: 1.6em;
    border-radius: 8px;
`

const ContTextBio = styled.div `
 
`

const Text= styled.p `
    margin: 0.6em 0em;
    line-height: 1.4em;
    font-weight: 500;
    width: 23em;
     font-size: 80%;
`

export{Titulocenter,
    TextCenter,
    ContainerBioProfesor,
    ImgProfileProfesor,
    ContTextBio,
    Text
}