import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useHistory, useParams } from 'react-router'
import NavBar from '../components/Navbar'
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from '@material-ui/core/LinearProgress';

export const NewPassword = () => {
    const {token} = useParams();
    const [loading, setLoading]= useState(false);
    const [form, setForm] = useState({})
    const [message, setMessage] = useState();
    const url = 'http://localhost:3001/new-password'
    const history = useHistory()

    const HandleSubmit = async(e)=>{
      setLoading(true);
      e.preventDefault();
      const {data} = await axios.put(url,form,{headers:{ 'Content-Type': 'application/json','reset':token}});
      const {message,status} = data;

      if(data){
         setLoading(false);
         setMessage(message)
      }
      if(status==='OK'){
        history.replace('/login')
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
           <div>
               <form onSubmit={HandleSubmit}>
                   <input type="password" name="newPassword" placeholder="Ingrese aqui su nueva contraseña" onChange={handleChange}/>
                   <p>{message}</p>
                   <button type="submit">Reestablecer</button>
               </form>
               {loading && <LinearProgress/>}
           </div>
        </div>
      
    )
}
