import styled from 'styled-components';

const colores ={
    titulo: '#3c3b37',
}

const Banner =styled.div `

    width: 100%;
    height: 60vh;
    background-image: url("/assets/img/Banner.jpg") ;
    background-repeat: no-repeat;
    background-size: cover;
    margin:0em auto 3em;
    @media (max-width: 1000px) {
      display:none
  }
`;

const ImgScroll =styled.div `

    width: 100%;
    margin:auto;
    margin-bottom:2em;
    height: 100vh;
    background-image: url("/assets/img/cafe-img.jpg") ;
    background-repeat: no-repeat;
    background-size: 100vw 100vh;
    background-attachment: fixed; 
  
`;

const ImgStatic =styled.div `
    width: 100%;
    
    margin:auto;
    height: 100vh;
    background-image: url("/assets/img/cafe-img.jpg") ;
    background-repeat: no-repeat;
    background-size: 100vw 100vh;
  
`;

const TitleBanner= styled.p `
font-weight: 700;
font-size: 2em;
line-height: 40px;
color: ${colores.titulo};
`;

const ContTextBanner = styled.div `
width: 23em;
float: left;
margin-top: 1.2em;
margin-left:3em;
padding: 1em;
border: 0.1px solid rgba(0, 0, 0, 0.10);
box-shadow: 0px 1.5px 6px rgba(0, 0, 0, 0.171);
background-color:white;
`;

const TextBanner = styled.p `
margin-top: 0.8em;
font-size: 95%;
color:#3c3b37;
`;

export {Banner,TitleBanner,ContTextBanner,TextBanner,ImgStatic};

