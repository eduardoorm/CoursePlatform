import axios from 'axios'
import React, { useState } from 'react'
import NavBar from '../components/Navbar';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import '../components/ComponentStyles/ForgotMyPassword.css'
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

export const ForgotMyPassword = () => {
    const classes = useStyles();
    const [form, setForm] = useState({})
    const url = 'http://localhost:3001/forgotMyPassword'
    const [loading, setLoading]= useState(false);
    const [message, setMessage] = useState();
    const handleSubmit = async(e)=>{
         e.preventDefault();
         setLoading(true);
         const  {data}= await axios.put(url,form);
         const {emailStatus,message} = data
         if(message){
            setLoading(false);
            setMessage(message)
         }
    }

    const handleChange= (e)=>{
        setForm({
          ...form,
          [e.target.name] : e.target.value,
        }) 
      }

    return (
        <div>
           <NavBar/>
           <div className="container_ForgotMyPassword">
               <div className="title_ForgotMyPassword">
                  <h1>Reestrablecer mi contraseña</h1>
               </div>
            <p>Por favor ingrese el email de la cuenta que desea reestablecer la contraseña</p>
            <form className={classes.root} noValidate autoComplete="off" onChange={handleChange} onSubmit={handleSubmit}>
                        <TextField
                        required
                        id="email-required"
                        label="Email"
                        name="email"
                        type="email"
                        />
                {loading && <LinearProgress/>}
                <p>{message}</p>
                <button>Enviar</button>
           </form>


           </div>
         
        </div>
    )
}
