import React, { useState} from 'react';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),     
      }
    }
  }));
  
export const FormTeaches = () => {
    const [form, setForm] = useState({});
    const classes = useStyles();
    const [loading, setLoading]= useState(false);
    const [message, setMessage] = useState();
    
    const handleChange = e =>{
        setForm({
                ...form,
                [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async e =>{
        e.preventDefault();
        setLoading(true)
        const {data} = await axios.post('http://localhost:3001/requestToTeach',form)
        const {message}=await data;
        if(data){
            setLoading(false)
            setMessage(message)
        } else{
            setLoading(false)
        }
    }


    return (
        <div className="formulario-contenedor">
           <h4>Don't miss this opportunity and become part of our teaching staff at Let's Learn</h4> 

            <form className={classes.root} noValidate autoComplete="off"
                 onSubmit = {handleSubmit} onChange={handleChange}>
            <div>
                    <TextField
                     required
                     id="standard-required"
                     label="Nombres"  
                     type="text"
                     name="nombres"
                    />
                    <TextField
                     required
                     id="standard-required"
                     label="Curso"  
                     type="text"
                     name="curso"
                    />

                    <TextField
                     required
                     id="standard-required"
                     label="Email"  
                     type="email"
                     name="email"
                    />

                    <TextField
                      required
                      id="standard-required"
                      label="URL"  
                      type="url"
                      name="url"
                    />

                    {loading && <LinearProgress/>}
                    <p>{message}</p>
                   <Button type="Submit" variant="contained" color="primary">
                       Enviar
                    </Button>
                  
                </div>
            </form>
        </div>
    )
}


















































