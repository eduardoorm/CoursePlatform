import React, { useState } from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import { Formulario } from '../../elementos/Formularios';
import Input from '../Input';
import { useFetchGetCertificadoPorID } from '../../hooksAdmin.js/useFetchGetCertificadoPorID';
import { useFecthGetProfesorID } from '../../hooksAdmin.js/useFecthGetProfesorID';
import { putProfesor } from '../../helpersAdmin/putProfesor';
import LinearProgress from '@material-ui/core/LinearProgress';
export const DashEditarTeacher = () => {
    
    let {id}= useParams();
    const [form, setform] = useState({});
    const history= useHistory()
    const [loading, setLoading]= useState(false);
    const {dataProfesor:teacher}=useFecthGetProfesorID(id);
    
    const handleChange =(e)=>{
      setform({
        ...form,
        [e.target.name]:e.target.value
      })
     }

    const editTeacher =async(e)=>{
      e.preventDefault();
      setLoading(true)
      const response = await putProfesor(form,id);
      if(response.ok){
        setLoading(false)
      }
     }
     
    return (
        <div>
        <button className="btn__BackTo" onClick={()=>{history.goBack()}}>Back To</button>
        <Formulario id="form">
                            <label htmlFor="name">Name</label>
                            <Input
                           placeholder={teacher[0]?.name|| "----" }
                           id="name"
                           name="name"
                           type="text"
                           onChange={handleChange}
                           /> 
                            <label htmlFor="lastname">Lastname</label>
                            <Input
                           placeholder={teacher[0]?.lastname|| "----" }
                           id="lastname"
                           name="lastname"
                           type="text"
                           onChange={handleChange}
                           />
                           {loading &&  <LinearProgress />} <br/><br/>
           <button type="submit" className="btn-default" onClick={editTeacher}>Update</button>
        </Formulario>
      </div>
    )
}
