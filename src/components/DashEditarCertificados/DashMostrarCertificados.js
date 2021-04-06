import React, { useState } from 'react'
import { useMemo } from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom'
import { deleteCertificado } from '../../helpersAdmin/deleteCertificado';
import { deleteEstudiante } from '../../helpersAdmin/deleteEstudiante';
import { useFetchGetCertificado } from '../../hooksAdmin.js/useFetchGetCertificado';
import { useFetchGetEstudiante } from '../../hooksAdmin.js/useFetchGetEstudiante';
import queryString from 'query-string'
import { getCertificateByEmail } from '../../selectors/getCertificateByEmail';
export const DashMostrarCertificados = () => {
    // const {dataEstudiante:estudiante}= useFetchGetEstudiante();
    const [editar, setEditar] = useState(true);   
    const {dataCertificado:certificados}= useFetchGetCertificado()
    const location = useLocation();
    const {q=''}=queryString.parse(location.search);
    const [form, setForm] = useState({
      searchText:q,
    })
    const history = useHistory();
    const certificadoFiltered=useMemo(() =>  getCertificateByEmail(q,certificados), [q]);

    const {searchText} = form;

    const handleSearch = (e)=>{
      e.preventDefault();
       setForm({
         ...form,
         [e.target.name] : e.target.value,
       })
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
      history.push(`?q=${searchText}`);
    }
  
   
    const eliminarStudent=(id_certificado,nombre_curso,certificado_email)=>{
      if(window.confirm(`¿Seguro que quieres eliminar al certificado: "${nombre_curso}" del email : "${certificado_email}"?`)){
        window.location.reload();
         return deleteCertificado(id_certificado);
      }
    }
    return (
      <>
      <div>
      <p>Total de Certificados: {certificados?.length}</p>
      <br/>
      <p>Busar por email  </p>
      <form onSubmit={handleSubmit}>
        <input
         type="email"
         name="searchText"
         placeholder="Ingresa el email"
         value={searchText}
         onChange={handleSearch}
        />
        <button type="submit" className="btn-default">Buscar</button>
      </form>
    </div>
    <br/>
       <div>
         <h4>Results</h4> 
         <hr/>
         {(q==='' )
           && <div>
             Search Certificate
           </div>
         }
         {(q !=='' && certificadoFiltered.length===0 )
           &&
            <div>
             No se encontro el estudiante con email {q}
           </div>

         }
      </div>

       <br/>
       <div className="Container_categoria">
                { certificadoFiltered?.map((certificado,pos)=>
                <>  
                    <div className="categoria_items" >
                        <div className="ID_Categoria">
                          <p>{pos+1}</p>
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
                         <button className="btn_categoria"
                          onClick={()=>eliminarStudent(certificado.id_certificado,certificado.nombre_curso,certificado.email)}>
                           Eliminar</button>    
                        </div>
                    </div> 
                </>
                )}
          </div>

          <br/>
          <h4>Certificados:</h4> 
         <hr/>
        <div className="Container_categoria">
                { certificados?.map((certificado,pos)=>
                <>  
                    <div className="categoria_items" >
                        <div className="ID_Categoria">
                          <p>{pos+1}</p>
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
                         <button className="btn_categoria"
                          onClick={()=>eliminarStudent(certificado.id_certificado,certificado.nombre_curso,certificado.email)}>
                           Eliminar</button>    
                        </div>
                    </div> 
                </>
                )}
          </div>
       </>
    )
}
