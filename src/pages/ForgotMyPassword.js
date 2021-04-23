import axios from 'axios'
import React, { useState } from 'react'
import NavBar from '../components/Navbar';
import LinearProgress from '@material-ui/core/LinearProgress';

export const ForgotMyPassword = () => {
    const [form, setForm] = useState({})
    const url = 'http://localhost:3001/forgotMyPassword'
    const [loading, setLoading]= useState(false);
    const [message, setMessage] = useState();
    const handleSubmit = async(e)=>{
         e.preventDefault();
         setLoading(true);
         const {data} = await axios.put(url,form);
         const {emailStatus,message} = data
         console.log(emailStatus);
         if(emailStatus){
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
           <h1>Reestrablecer mi contraseña</h1>
           <p>Por favor ingrese el email de la cuenta que desea reestablecer la contraseña</p>
           <form onSubmit={handleSubmit}>
               <input type="email" name="email" placeholder="Ingrese su email" onChange={handleChange}/>
               {loading && <LinearProgress/>}
               <p>{message}</p>
               <button>Enviar</button>
           </form>
        </div>
    )
}
