import React, { useMemo, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import queryString from 'query-string'
import { searchScreen } from '../Search/searchScreen';
import { deleteEstudiante } from '../../helpersAdmin/deleteEstudiante';
import { useFetchGetEstudiante } from '../../hooksAdmin.js/useFetchGetEstudiante';
import { NavbarRight } from '../../elementos/Navbar-elementos';
import TituloVideo from '../TituloVideo';
import { useHistory, useParams } from 'react-router-dom'
import { getStudientByEmail } from '../../selectors/getStudientByEmail';

export const DashMostarStudent = () => {
    const {dataEstudiante:estudiante}= useFetchGetEstudiante();
    const [editar, setEditar] = useState(true);
    const location = useLocation();
    const {q=''}=queryString.parse(location.search);
    console.log(q);
    const [form, setForm] = useState({
      searchText:q,
    })
  
    
    const history = useHistory();
    const eliminarStudent=(id_persona,email)=>{
      if(window.confirm(`¿Seguro que quieres eliminar al estudiante con email : ${email}?`)){
        window.location.reload();
         return deleteEstudiante(id_persona);
      }
    }
    const {searchText} = form;
   
    const studentFiltered=useMemo(() =>  getStudientByEmail(q,estudiante), [q]);

    const handleSubmit = (e) =>{
      e.preventDefault();
      history.push(`?q=${searchText}`);
    }

    const handleSearch = (e)=>{
      e.preventDefault();
       setForm({
         ...form,
         [e.target.name] : e.target.value,
       })
    }
   
    return (
      <>
        
       <div>
         <p>Total de estudiantes: {estudiante?.length}</p>
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
             Search a Student
           </div>
         }
         {(q !=='' && studentFiltered.length===0 )
           &&
            <div>
             No se encontro el estudiante con email {q}
           </div>

         }
      </div>
           <div className="Container_categoria">
              {
                studentFiltered?.map(student=>
                  <>
                <div className="categoria_items">
                  <div className="nombre_Categoria">
                    <p>{student.nombre}</p>
                  </div>
                  <div className="nombre_Categoria">
                    <p>{student.apellidos || "----"}</p>
                  </div>
                  <div className="nombre_Categoria">
                    <p>{student.email || "----"}</p>
                  </div>
                  <div className="botones_categoria">
                   <Link to={`/admin/estudiante/editar/${student.id}`}><button className="btn_categoria" >Editar</button></Link>   
                   <button className="btn_categoria" onClick={()=>eliminarStudent(student.id_persona,student.email)}>Eliminar</button>    
                  </div>
                   
                </div>  

              </>
            )
          }
    </div>
   

      
        
              
              
      
            
         </>
    )
}
