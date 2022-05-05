import React, { useState } from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import { Formulario } from '../../elementos/Formularios';
import Input from '../Input';
import { useFetchGetSeccionPorID } from '../../hooksAdmin.js/useFetchGetSeccionPorID';
import { putSeccion } from '../../helpersAdmin/putSeccion';
import LinearProgress from '@material-ui/core/LinearProgress';

export const DashEditarSection = () => {
    let {id}= useParams();
    const [form, setform] = useState({});
    const history= useHistory()
    const [loading, setLoading]= useState(false);
    const handleChange =(e)=>{
      setform({
        ...form,
        [e.target.name]:e.target.value
      })
     }
     
    const {dataSeccion:section} = useFetchGetSeccionPorID(id)

     const editarSeccion =(e)=>{
      setLoading(true)
      e.preventDefault();
      const response =  putSeccion(form,id)
      if(response.ok) return setLoading(false)
      
     }
    
  return (
      <div>
        <button className="btn__backTo" onClick={()=>{history.goBack()}}>Back To</button>
        <Formulario id="form">
                            <label htmlFor="name">Name</label>
                            <Input
                           placeholder={section[0]?.name }
                           id="name"
                           name="name"
                           type="text"
                           onChange={handleChange}
                           /> 
                           {loading &&  <LinearProgress />} <br/><br/>
           <button type="submit" className="btn__default" onClick={editarSeccion}>Update</button>
        </Formulario>
      </div>
   )
}
