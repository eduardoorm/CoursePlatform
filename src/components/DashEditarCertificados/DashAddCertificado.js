import React, { useMemo, useState } from 'react'
import { postCertificado } from '../../helpersAdmin/postCertificado'
import { useFetchGetEstudiante } from '../../hooksAdmin.js/useFetchGetEstudiante'
import {Link, useLocation} from 'react-router-dom'
import queryString from 'query-string'
import { searchScreen } from '../Search/searchScreen';
import { deleteEstudiante } from '../../helpersAdmin/deleteEstudiante';
import { NavbarRight } from '../../elementos/Navbar-elementos';
import TituloVideo from '../TituloVideo';
import { useHistory, useParams } from 'react-router-dom'
import { getStudientByEmail } from '../../selectors/getStudientByEmail';
import { DashNav } from '../DashNav'
export const DashAddCertificado = () => {
    // const handleSubmit =(e)=>{
    //    setForm({
    //        ...form,
    //       [e.target.name]:e.target.value,
    //    })
    // }
    const [clickBuscar, setClickBuscar] = useState(false)
    const location = useLocation();
    const {q=''}=queryString.parse(location.search);
    console.log(q);
    const [form, setForm] = useState({
      searchText:q,
    })

    const [dataCertificate, setDataCertificate] = useState({

    })
    const history = useHistory();
    
  
    const {dataEstudiante:estudiante} =useFetchGetEstudiante()
    const {searchText} = form;
    const studentFiltered=useMemo(() =>  getStudientByEmail(q,estudiante), [q]);
    const id_persona = studentFiltered[0]?.id_persona;
    const handleSearch = (e)=>{
        e.preventDefault();
         setForm({
           ...form,
           id_persona,
           [e.target.name] : e.target.value,
         })
         console.log("formulario",form);
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
      setClickBuscar(true)
      history.push(`?q=${searchText}`);
    }

    const AddCertificado=(e)=>{
       e.preventDefault();
       const {id_persona,nombre_archivo,nombre_curso}=form;
       const enviar ={id_persona,nombre_archivo,nombre_curso}
       
       return postCertificado(enviar)
    }
 
    return (
        <div >
        <div>
         <p>Elija un estudiante</p>
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
      {
       
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
                    </div>  
                </>
              )
            }
         </div>
      }
     {
       (clickBuscar && studentFiltered.length!==0 )&&
        <form>
            <label for="nom_curso">Nombre del Curso</label>
            <input id="nom_curso" name="nombre_curso" type="text" onChange={handleSearch}/>
            <label for="des_curso">Certificado</label>
            <input id="des_curso" name="nombre_archivo" type="text" onChange={handleSearch}/>
                <br/> <br/>
            <button type="submit" className="btn-default" onClick={AddCertificado}>Agregar</button>
         </form>
     }
          
        </div>
    )
}
