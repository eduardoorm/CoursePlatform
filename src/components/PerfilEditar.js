// import React, {useEffect, useState} from 'react'
// import Input from './Input';
// import {Formulario} from '../elementos/Formularios'
// import {Btn} from './Button'
// import EditarContraseña from './EditarContraseña'
// import { UseFecthUsuario } from '../hooks/useFecthUsuario';
// import {putUsuario} from '../helpers/putUsuario'
// import LinearProgress from '@material-ui/core/LinearProgress';
// import './ComponentStyles/Perfil-comp.css'
// import {useFetchPerfil} from '../hooks/useFetchPerfil';

// export default function PerfilEditar (){
//   const [changePass,setchangePass] = useState(false);
//   const [token,setToken]=useState();

//   //let {data}= UseFecthUsuario();

//   const {data} = useFetchPerfil(token)
//   //console.log("state",dataUser);
//   const [usuario, setUsuario] = useState({});
//   const [loading, setLoading]= useState(false);

//   const handleChange =(e)=>{
//     setUsuario({
//       ...usuario,
//       id_persona:data?.id_persona,
//       [e.target.name] : e.target.value
//     })

//    }
  
//   const clickCambiarContraseña =(e)=>{
//     (changePass) ? setchangePass(false) : setchangePass(true);
//     e.preventDefault();
//   }
  
   
//   const handleGuardarCambios= async (e)=>{
//       e.preventDefault();
//       setLoading(true)
//       const response = await putUsuario(usuario);  
//       // window.location.reload();
//       if(response.ok){
//         localStorage.setItem("token",JSON.stringify({token:response.token}))
//         setToken(response.token)
//         setLoading(false)
//       }
//   }

//   return(
//         <div className="form__actualizar">
//             <div className="actualizar__item">
//                     <div className="form-titulo">
//                             <h1>Tus datos</h1> 
//                     </div>
 
//                   <div className="form-post">
//                       <Formulario id="form">
//                             <Input
//                             id="nombres"
//                             name="nombre"
//                             placeholder={data?.nombre || ""}
//                             type="text"
//                             onInput={handleChange}
//                             /> 
//                             <Input
//                             id="apellidos"
//                             name="apellido"
//                             type="text"
//                             placeholder="Nuevo Apellido"
//                             placeholder={data?.apellidos || ""}
//                             onInput={handleChange}
//                             /> 
//                             <Input 
//                             id="email"
//                             name="email"
//                             placeholder="Email"
//                             type="email"
//                             value={data?.email || ""}
//                             disabled={true}
//                             /> 
//                         {
//                         (!changePass) &&
//                           <>
//                           <button
//                             className="btn_cambiarContraseña"
//                             onClick={clickCambiarContraseña} 
//                             type="button">Cambiar Contraseña
//                           </button>
                          
//                           {loading &&  <LinearProgress />}
//                           <Btn
//                             style="btn_guardarCambios"
//                             value="Guardar cambios"
//                             type="button"
//                             onClick={handleGuardarCambios}
//                           />
//                           </>
//                         }  
//                     </Formulario>
//                   </div>
//              </div> 
//              <div className="actualizar__item">
//                {changePass && <EditarContraseña/>} 
//              </div>
//         </div>   
//       )
// }

