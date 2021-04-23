import styled from 'styled-components';

const ContInstructor = styled.div `
    width: 100%;
    max-width: 1350;
    height: 315px;
    background-color: #FBFBF8;
    margin:100px 0px 150px;
    padding-right: 10em;
    display: flex;
    justify-content: flex-end;
    margin:15em 0em;
    @media (max-width: 1130px) {
        padding:0px;
         height:auto;
     }
`;

const BtnEmpiezaEnseniar = styled.button `
    background-color: #3256D5 ;
    padding: 13px;
    color: #fff;
    border: none;
    border-radius: 3px;
    font-size: 15px;
    font-weight: 600;
    cursor:pointer;
`;

const TextContInstructor = styled.div `
    width: 430px;
    padding-top: 2.0em;
    @media (max-width: 1130px) {
        padding:2em;
     }
`;

const ImgContInstructor = styled.div `
    width: 400px;
    height: 390px;
    margin-right:100px;
    transform: translateY(-38px);
    @media (max-width: 1130px) {
        display:none;
     }
`;

const ImgTeacher = styled.img `
    width: 100%;
    height: 100%;
    box-shadow: 0px 4px 10px rgba(172, 172, 172, 0.219);
`;

const TituloContInstructor = styled.h2 `
    color:#3C3B37;
    font-size: 1.6em;
`  ; 


const ParrafoContInstructor = styled.p `
     margin: 8px 0px 16px; 
     font-size: 95%;
     color:#3C3B37;
`
export {
    ContInstructor,
    BtnEmpiezaEnseniar,
    TextContInstructor,
    ImgContInstructor,
    ImgTeacher,
    TituloContInstructor,
    ParrafoContInstructor
}