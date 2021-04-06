import React from 'react'
import { useParams } from 'react-router';
import '../components/ComponentStyles/Certificado.css'
import { getUsuario } from '../helpers/getUsuario';
import { useFecthUsuario } from '../hooks/useFecthUsuario';
import { useFetchGetCertificadoPorPersonaID } from '../hooksAdmin.js/useFetchGetCertificadoPorPersonaID'
export const Certificado = () => {
   
    const {id} = useParams();
    const {dataCertificado:certificados}= useFetchGetCertificadoPorPersonaID(id);
    return (
        <>
            <h1 className="certificado_titulo">Mis Certificados </h1>

            {/* <div className="container_buscarCertificado">
                <form>
                    <input
                    className="input_buscarDNI"
                    type="text"
                    placeholder="Ingrese su DNI..."
                    />
                    <button type="submit" className="btn_buscar">Buscar</button>
                </form>
            </div> */}
             
            {
                certificados?.length===0 ?
                <div className="container-Certificados">
                 <p className="certificado_No_Encontrado">Aún no tienes certificados 🙁</p>
                 </div>
                 :
               <div className="container-Certificados">
                  <h3>Curso</h3> 
               <div className="certificado-iten">
                   {certificados?.map(el=>
                    <p>{el.nombre_curso}</p>
                   )}
                <button><i class="fas fa-file-download fa-2x"></i></button>  
               </div>     
            </div>
            }
        </>
    )
}
