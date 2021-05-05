import React from 'react'
import { useParams } from 'react-router';
import '../components/ComponentStyles/Certificado.css';
import { useFetchGetCertificadoPorPersonaID } from '../hooksAdmin.js/useFetchGetCertificadoPorPersonaID'
export const Certificado = () => {
    const {id} = useParams();
    const {dataCertificado:certificados}= useFetchGetCertificadoPorPersonaID(id);
    return (
        <>
            <h1 className="certificado_titulo">Mis Certificados </h1>
             
            {
                certificados?.length===0 ?
                <div className="container-Certificados">
                 <p className="certificado_No_Encontrado">Aún no tienes certificados 🙁</p>
                 </div>
                 :
               <div className="container-Certificados">
                  <h3>Curso</h3> 
               <div className="certificado_Box">
                   {certificados?.map(el=>
                    <div className="certificado_Item">
                    <p>{el.nombre_curso}</p>    
                    <button><i className="fas fa-file-download fa-2x"></i></button>  
                    </div>
                   )}

                
               </div>     
            </div>
            }
        </>
    )
}
