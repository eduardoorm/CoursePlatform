import React from 'react'
import '../components/ComponentStyles/Certificado.css'
export const Certificado = () => {
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

            <div className="container-Certificados">
               <div className="certificado-iten">
                  <p>Curso de programacion en python</p> 
                  <i class="fas fa-file-download fa-2x"></i>
               </div>    
               <div className="certificado-iten">
                  <p>Autocat desde 0 hasta avanzado</p> 
                  <i class="fas fa-file-download fa-2x"></i>
               </div>     
               <div className="certificado-iten">
                  <p>Aprende React Native de 0 a Profesional Edicion 2021</p> 
                  <i class="fas fa-file-download fa-2x"></i>
               </div>  
            </div>

        </>
    )
}
