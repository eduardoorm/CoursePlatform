import React , {useState} from 'react'
import { useFecthPersonaCurso } from '../hooks/useFetchPersonaCurso'
import { MiCurso } from './MiCurso';
import {Link} from 'react-router-dom'
import './ComponentStyles/Perfil-comp.css'
import Input from './Input';
import {Formulario} from '../elementos/Formularios'
import {Btn} from './Button'
import EditarContraseña from './EditarContraseña'
import {putUsuario} from '../helpers/putUsuario'
import LinearProgress from '@material-ui/core/LinearProgress'
import './ComponentStyles/Perfil-comp.css'
import {useFetchPerfil} from '../hooks/useFetchPerfil'

export default function PerfilComp () {
   const[clickEditarPerfil,setEditarPerfil]=useState(false);
   //const {data:user} = UseFecthUsuario();
   const [token,setToken]=useState();

   
    const {data} = useFetchPerfil(token)
   const {dataCurso:cursos}= useFecthPersonaCurso();
   const handlEditarPerfil = ()=>(clickEditarPerfil) ? setEditarPerfil(false) : setEditarPerfil (true);
   const [changePass,setchangePass] = useState(false);
  /// let {data}= UseFecthUsuario();
   const [usuario, setUsuario] = useState({});
   const [loading, setLoading]= useState(false);
   const handleChange =(e)=>{
     setUsuario({
       ...usuario,
       id_persona:data?.id_persona,
       [e.target.name] : e.target.value
     })
    }
   
   const clickCambiarContraseña =(e)=>{
     (changePass) ? setchangePass(false) : setchangePass(true);
     e.preventDefault();
   }
  
    
   const handleGuardarCambios= async (e)=>{
       e.preventDefault();
       setLoading(true)
       const response = await putUsuario(usuario);
       
       // window.location.reload();
       if(response.ok){
        localStorage.setItem("token",JSON.stringify({token:response.token}))
                setToken(response.token)
        setLoading(false)
       }
   }

       return(         
        <section className="perfil-estudiante">
             {
             clickEditarPerfil && 
              <button 
                className="volverPerfil" 
                onClick={()=>handlEditarPerfil(false)}>
                <i className="far fa-arrow-alt-circle-left fa-2x"></i>
              </button>
              } 

            <div className="perfil-estudiante-header">
                <div className="estudiante-header-item">
                    <img src="assets/img/perfil.png" alt="img-perfil"/>
                </div>
                <div className="estudiante-header-item">
                    <p>{data?.nombre||loading}  {data?.apellidos||"null"}</p>
                    <p>{data?.email||loading}</p>
                    <button 
                        onClick={handlEditarPerfil} 
                        className="btn_editarPerfil">
                        {
                        (!clickEditarPerfil) && <p>Editar Perfil</p> 
                        }
                    </button>
                </div>
            </div>
            {(clickEditarPerfil)
             ? 
             <div className="form__actualizar">
             <div className="actualizar__item">
                     <div className="form-titulo">
                             <h1>Tus datos</h1> 
                     </div>
                   <div className="form-post">
                       <Formulario id="form">
                             <Input
                             id="nombres"
                             name="nombre"
                             placeholder={data?.nombre || ""}
                             type="text"
                             onInput={handleChange}
                             /> 
                             <Input
                             id="apellidos"
                             name="apellido"
                             type="text"
                             placeholder="Nuevo Apellido"
                             placeholder={data?.apellidos || ""}
                             onInput={handleChange}
                             /> 
                             <Input 
                             id="email"
                             name="email"
                             placeholder="Email"
                             type="email"
                             value={data?.email || ""}
                             disabled={true}
                             /> 
                         {
                         (!changePass) &&
                           <>
                           <button
                             className="btn_cambiarContraseña"
                             onClick={clickCambiarContraseña} 
                             type="button">Cambiar Contraseña
                           </button>
                           
                           {loading &&  <LinearProgress />}
                           <Btn
                             style="btn_guardarCambios"
                             value="Guardar cambios"
                             type="button"
                             onClick={handleGuardarCambios}
                           />
                           </>
                         }  
                     </Formulario>
                   </div>
              </div> 
              <div className="actualizar__item">
                {changePass && <EditarContraseña/>} 
              </div>
         </div> 
             :
             (cursos?.length===0)?
              <div className="estudiante-SinCursos-container">
                <h3>Mis Cursos</h3>
                <div className="estudiante-misCursos">
                    <p>Aun no tienes cursos 🙁</p>
                 <Link to="/collections"><button className="btn-explorarCursos">Explorar Cursos</button></Link>  
                </div>
             </div>
             :
             <>
             <h2 className="misCursos_Titulo">Mis Cursos</h2>
              <div className="estudiante-misCursos-container">             
                    {cursos?.map(curso=><MiCurso key={curso} {...curso} />) }
                
              </div>
             </>  
            }   
        </section>    
       )
} 
