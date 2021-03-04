import styled from 'styled-components'

const ContainBannerCurso = styled.div `
    position: absolute;
    top:0;
    left:13%;
  
`

const BannerCurso= styled.div `
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
` 

const TextBannerCurso = styled.div `
    width: 30em;
    color:white;
    font-weight: 500;
    line-height: 1.25em;
    font-size: 80%;
    margin-right: 2em;
    margin-top:3em;
    
`
const EmpezarYa = styled.button `
   background-color: #3256D5;
   border:none;
   padding:0.8em 2em;
   border-radius: 8px;
   color:white;
   font-weight: 600;
   margin-top: 2em;
`

  const ImgBannerCurso = styled.div `
       width: 27em;
       height:14.5em;
     
  ` 
  const ImgBanner = styled.img `
      width: 100%;
      height: 100%;
  `

  const ImgFilter = styled.div `
    
    width: 100%;
    height: 14.8em;
    background-image: url('assets/img/profesor1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 50%; 
    filter: contrast(100%) brightness(0.7) ;
    -webKit-filter: contrast(100%) brightness(0.7);
    margin-top:1px;
  `

  const ContenedorBanner = styled.div `
     width:100%;
     position:relative;
  `

  export {  ContainBannerCurso,
            BannerCurso,
            TextBannerCurso,
            EmpezarYa,
            ImgBannerCurso,
            ImgBanner,
            ImgFilter,
            ContenedorBanner
        }