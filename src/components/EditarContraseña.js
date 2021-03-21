import Input from './Input';
import {Formulario} from '../elementos/Formularios'
import {Btn} from './Button'
import { useState} from 'react';
import { useFecthUsuario } from '../hooks/useFecthUsuario';
import { putUsuarioPassword } from '../helpers/putUsuarioPassword';
export default function EditarContraseña(){
    const [inputState,setInputState]= useState({});
    const {data:user} = useFecthUsuario();

        const handleChange = ({target:{name,value}})=>{
            setInputState ({...inputState,[name]:value})
        }    

        const handleCambiarContraseña = async (e)=>{
            e.preventDefault();
            const {pass_new,pass_confirm} = inputState        
            const {id_persona,nombre,apellidos} = user;
            const newUser={
                id_persona,
                nombre,
                apellidos,
                password: pass_new,
                pass_confirm
            }
            putUsuarioPassword(newUser)
        }

    return(
      <>
        <div className="form-titulo">
          <h1>Cambiar Contraseña</h1> 
        </div>

        <div className="form-post">
            <Formulario id="form-contraseña">
                <Input
                id="password-previous"
                name="pass"
                type="password"
                placeholder="Contraseña anterior"
                onChange={handleChange }
                /> 
                <Input
                id="password-nueva"
                name="pass_new"
                type="password" 
                required={true}
                placeholder="Nueva contraseña"
                onChange={handleChange}        
                /> 
                <Input
                id="password-confirmar"
                name="pass_confirm"
                type="password" 
                required={true}
                placeholder="Confirmar contraseña"
                onChange={handleChange}        
                /> 
                <Btn
                style="btn_guardarCambios"
                value="Guardar nueva contraseña"
                type="submit"
                onClick={handleCambiarContraseña}
                />
            </Formulario>
        </div>
    </>
    )
}
