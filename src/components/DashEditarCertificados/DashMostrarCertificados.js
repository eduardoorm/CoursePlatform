import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { deleteEstudiante } from '../../helpersAdmin/deleteEstudiante';
import { useFetchGetCertificado } from '../../hooksAdmin.js/useFetchGetCertificado';
import { useFetchGetEstudiante } from '../../hooksAdmin.js/useFetchGetEstudiante';

export const DashMostrarCertificados = () => {
    // const {dataEstudiante:estudiante}= useFetchGetEstudiante();
    const [editar, setEditar] = useState(true);
    const eliminarStudent=(id_persona,id_estudiante)=>{
      if(window.confirm(`¿Seguro que quieres eliminar al estudiante ID:${id_estudiante}?`)){
        window.location.reload();
         return deleteEstudiante(id_persona);
      }
    }
     const {dataCertificado:certificados}= useFetchGetCertificado()
    return (
        <div className="Container_categoria">
            {/* <p>Mostrar Certificados </p> <br/> */}
            <input placeholder="Ingrese el email del estudiante"/> <br/><br/>
                { certificados?.map(certificado=>
                <>  
                    <div className="categoria_items" >
                        <div className="ID_Categoria">
                          <p>{certificado.id_certificado}</p>
                        </div>
                        <div className="nombre_Categoria">
                          <p>{certificado.email|| "----"}</p>
                        </div>
                        <div className="nombre_Categoria">
                          <p>{certificado.nombre_curso}</p>
                        </div>
                        <div className="botones_categoria">
                         <Link to={`/admin/certificados/editar/${certificado.id_certificado}`}>
                           <button className="btn_categoria" >Editar</button>
                        </Link>   
                         <button className="btn_categoria" onClick={()=>eliminarStudent(certificado.id_persona,certificado.id)}>Eliminar</button>    
                        </div>
                    </div> 
                </>
                )}
             </div>
    )
}
