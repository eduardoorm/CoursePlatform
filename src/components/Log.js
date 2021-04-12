import React, { useState} from 'react';
import './ComponentStyles/Log.css'
import Input from './Input'
import { Link ,useHistory} from 'react-router-dom';
import {GoogleLogin} from 'react-google-login';
import { loginUser } from '../hooks/loginUser';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from '@material-ui/core/LinearProgress';
const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
       
      }
    }
  }));

export default function Log () {
    const [form, setForm] = useState({});
    const [redirect, setRedirect] = useState(false)
    const [loading, setLoading]= useState(false);
    const [invalidData, setinvalidData] = useState(false)
     const history = useHistory();
    const handleChange = e =>{
        setForm({
                ...form,
                [e.target.name] : e.target.value
        })
    }

    const respuestaGoogle = async(response)=>{
       const dataUser= response.profileObj;
       if(dataUser){
        const { email,googleId} = dataUser;
        const sendDataUser = {
         email,
         password:googleId,
        }
        const log = await loginUser(sendDataUser)
         if(log?.ok){
             setRedirect(true)
         }  
       }   
    }
  
    const handleSubmit = async e =>{
        e.preventDefault();
        setLoading(true)
        const log = await loginUser(form)
        if(log?.ok){
            setRedirect(true)
            setLoading(false)
            setinvalidData(false)
        } else{
            setinvalidData(true)
            setLoading(false)
        }
    }

    const classes = useStyles();
    //localStorage solo almacena strings, la otra manera es meterlo dentrod e un json.stringyfy()
    return(       
        <>
        {(localStorage.getItem("token")) && history.push("/")}
        {(redirect) && history.replace("/") }
        <div className="formulario-contenedor">
            <form className={classes.root} noValidate autoComplete="off"
                 onSubmit = {handleSubmit} onChange={handleChange}>
                <div>
                    <TextField
                    required
                    id="standard-required"
                    label="Correo Electronico"  
                    type="email"
                    name="email"
                    />
                    <TextField
                    id="standard-password-input"
                    label="Contraseña"
                    type="password"
                    autoComplete="current-password"
                    name="password"
                    />
                </div>

                {invalidData && <p>datos no validos*</p>}
                {loading &&  <LinearProgress />}

                    <Input
                    type="submit"
                    value="Iniciar Sesión"
                    id="started"
                    
                    >
                    </Input>
            </form>

            <div className="register-down">
                 <p className="google"><a href="Google" className="link-google">Olvide mi contraseña</a></p> 
                 <Link to="register">
                 <p className="privacy-terms">¿No tienes una cuenta? <a href="#" className="links-terms">Regístrate</a></p> 
                 </Link> 
            </div>

            <br/>
            
            <GoogleLogin
                clientId="593174414261-1gu1nc4svuu26erj483ptivnt56i5ab2.apps.googleusercontent.com"
                buttonText="Ingresar"
                onSuccess={respuestaGoogle}
                onFailure={respuestaGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
        </>
        )
  }