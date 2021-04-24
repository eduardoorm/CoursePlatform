import React, { useState} from 'react';
import {Btn} from '../components/Button'
import {Redirect} from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { postEstudiante } from '../helpersAdmin/postEstudiante';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
      },
        width: '100%',
        '& > * + *': {
        marginTop: theme.spacing(2),
        },
    }
}));

export default function Register (){
     const classes = useStyles();
     const [form, setForm] = useState({});
     const [register, setRegister] = useState(false);
     const [loading, setLoading]= useState(false);
     const [alert,setAlert] = useState({status:false,msg:""})
    const handleChange = e =>{
        setForm({
                ...form,
                [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async(e) =>{
       e.preventDefault()
       setLoading(true);
       const {nombre,apellidos,email,password} = form;
       let ckeckEmail=
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email)
       if(!ckeckEmail){
        setLoading(false);
        return setAlert({status:true,msg:"Ingrese un email correcto"});
       }
       if(!(nombre,apellidos,email,password)){     
           setLoading(false);
           return setAlert({status:true,msg:"Todos los campos son obligatorios"});
       }
          

       try {
         let config ={
           method: 'POST',
           headers:{
               'Accept': 'application/json',
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(form),
         }

         let res = await fetch('http://localhost:3001/postUser',config)
         if(res.ok){
            setRegister(true)
            setLoading(false)
            setAlert(false)
         }else{
             console.log("No se pudo registar");
         }
        
       } catch (error) {
           console.log(error)
       }
    }
    
    const respuestaGoogle =(response)=>{
        
        const dataUser= response.profileObj;
        //el data user trae email,familyName,givenName,googleId,imageUrl y el name
        const { email,familyName,givenName,googleId} = dataUser;
        console.log(email);
        const sendDataUser = {
            email,
            apellidos:familyName,
            password:googleId,
            nombre:givenName,
        }
        postEstudiante(sendDataUser)
    }
        
    if(register){
        return <Redirect to="/login"/>
    }
    return(
        <>
        <div className="formulario-contenedor">
            <div className="form-titulo">
                    <h1>Inscríbete y comienza a aprender.</h1> 
            </div>
            <div className="form-post">

            <GoogleLogin
                clientId="593174414261-1gu1nc4svuu26erj483ptivnt56i5ab2.apps.googleusercontent.com"
                buttonText="Register"
                onSuccess={respuestaGoogle}
                onFailure={respuestaGoogle}
                cookiePolicy={'single_host_origin'}
            />
            <br/><br/>
            <form className={classes.root} noValidate autoComplete="off" onChange={handleChange} onSubmit={handleSubmit}>
                <div>
                <TextField
                    required
                    id="nombre-required"
                    label="Nombres"
                    name="nombre"
                    />
                    <TextField
                    required
                   
                    label="Apellidos"
                    name="apellidos"
                    />
                    <TextField
                    required
                    id="email-required"
                    label="Email"
                    name="email"
                    />
                    <TextField
                    id="standard-password-input"
                    label="Contraseña"
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    />
                   
                </div>
                 {alert.status &&  <p>{alert.msg}</p>}
                 {loading &&  <LinearProgress />}
                   <Btn
                    style="registrarme"
                    value="Registrarme"
                    type="Submit"
                    />
            </form>
           
            </div>
       </div>  
       </>
    )
}

