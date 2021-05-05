import React, { useMemo, useState } from 'react'
import { postCertificado } from '../../helpersAdmin/postCertificado'
import { useFetchGetEstudiante } from '../../hooksAdmin.js/useFetchGetEstudiante'
import { useLocation} from 'react-router-dom'
import queryString from 'query-string'
import { useHistory} from 'react-router-dom'
import { getStudientByEmail } from '../../selectors/getStudientByEmail';
import LinearProgress from '@material-ui/core/LinearProgress';
export const DashAddCertificado = () => {
    const [clickBuscar, setClickBuscar] = useState(false)
    const location = useLocation();
    const {q=''}=queryString.parse(location.search);
    const [loading, setLoading]= useState(false);
    const [form, setForm] = useState({
      searchText:q,
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
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
      setClickBuscar(true)
      history.push(`?q=${searchText}`);
    }

    const AddCertificado=async(e)=>{
       e.preventDefault();
       const {id_persona,nombre_archivo,nombre_curso}=form;
       const enviar ={id_persona,nombre_archivo,nombre_curso}
       setLoading(true)
      const response = await postCertificado(enviar);
      if(response.ok){
        setLoading(false)
      }   
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
                    <div className="categoria_items" key={student.id}>
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
            <label htmlFor="nom_curso">Nombre del Curso</label>
            <input id="nom_curso" name="nombre_curso" type="text" onChange={handleSearch}/>
            <label htmlFor="des_curso">Certificado</label>
            <input id="des_curso" name="nombre_archivo" type="text" onChange={handleSearch}/>
                <br/>
                {loading &&  <LinearProgress />} 
                 <br/>
            <button type="submit" className="btn-default" onClick={AddCertificado}>Agregar</button>
         </form>
     }
          
        </div>
    )
}
