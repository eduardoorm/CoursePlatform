import React from 'react'
import { useParams } from 'react-router';
import { useFetchGetSubsByCursoID } from '../../hooksAdmin.js/useFetchGetSubsByCursoID'
import {Link, useHistory} from 'react-router-dom'
export const DashMostrarReportes = () => {
      const {id}=useParams();
      const history= useHistory()
      const {dataSuscripciones:subs} = useFetchGetSubsByCursoID(id);
      console.log(subs);
    return (
        <div className="Container_categoria">
        <button className="btn-Volver" onClick={()=>{history.push(`/admin/suscripciones`)}}>volver</button>
            {
                (subs?.length===0) &&
                <h4>Este curso aún no cuenta con estudiantes registrados </h4>
            }
             <h3>{subs[0]?.nombre_curso}</h3>
             <br/>
             <p>Cantidad de estudiantes: {subs?.length}</p>
             <br/>
        { subs?.length !==0 && subs?.map((item,pos)=>
        <>  
       
            <div className="categoria_items" >
                <div className="ID_Categoria">
                  <p>{pos+1}</p>
                </div>
                <div className="nombre_Categoria">
                  <p>{item.email|| "----"}</p>
                </div>
                <div className="nombre_Categoria">
                  <p>{item.nombre}</p>
                </div>
                <div className="nombre_Categoria">
                  <p>{item.apellidos}</p>
                </div>
            </div> 
        </>
        )}
  </div>
    )
}
