import React, {useEffect, useState} from 'react'
import Input from './Input';
import {Formulario} from '../elementos/Formularios'
import {Btn} from './Button'
import EditarContraseña from './EditarContraseña'
import { useFecthUsuario } from '../hooks/useFecthUsuario';
import { putUsuario } from '../helpers/putUsuario';

export default function PerfilEditar (){
  const [changePass,setchangePass] = useState(false);
  const aa = useFecthUsuario();
  const [usuario, setUsuario] = useState({ data: [{}], loading: true });

  const handleChange =(e)=>{
    setUsuario({
      ...usuario,
      data:
      {...usuario.data, [e.target.name]: e.target.value}
    })
   }
  
  
  const clickCambiarContraseña =(e)=>{
    (changePass) ? setchangePass(false) : setchangePass(true);
    e.preventDefault();
  }

  useEffect(async () => {
    const res = await aa;
    console.log("adentro",res);
    setUsuario(res); 
   }, [])


  // const handleGuardarCambios= async (e)=>{
  //   e.preventDefault();
  //   (nombre.trim().length>2 && apellido.trim().length>4) 
  //     ? 
  //     putUsuario(form) 
  //     :
  //    alert("Los nombres y apellidos deben ser mayor a cuatro letras")
  // }

  return(
        <div className="form__actualizar">
            <div className="actualizar__item">
                    <div className="form-titulo">
                            <h1>Tus datos</h1> 
                    </div>
                  <div className="form-post">
                      <Formulario id="form">
                            <Input
                            value={usuario?.data.nombre || ""}
                            id="nombres"
                            name="nombre"
                            type="text"
                            onInput={handleChange}
                            /> 
                            <Input
                            id="apellidos"
                            name="apellido"
                            type="text"
                            value={usuario?.data.apellido|| ""}
                            onInput={handleChange}
                            /> 
                            <Input 
                            id="email"
                            name="email"
                            type="email"
                            value={usuario?.email || ""}
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

                          <Btn
                            style="btn_guardarCambios"
                            value="Guardar cambios"
                            type="button"
                            // onClick={handleGuardarCambios}
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
      )
}

