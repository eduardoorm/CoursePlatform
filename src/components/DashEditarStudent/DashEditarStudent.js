import React, { useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import { useFetchGetEstudianteID } from '../../hooksAdmin.js/useFetchGetEstudianteID';
import { Formulario } from '../../elementos/Formularios';
import Input from '../Input';
import { putEstudiante } from '../../helpersAdmin/putEstudiante';
import LinearProgress from '@material-ui/core/LinearProgress';

export const DashEditarStudent = () => {
      let {id}= useParams();
      const{dataEstudiante:student}  = useFetchGetEstudianteID(id);
      const id_persona = student[0]?.id_persona;
      const [form, setform] = useState({});
      const [loading, setLoading]= useState(false);

   
      const handleChange =(e)=>{
        setform({
          ...form,
          [e.target.name]:e.target.value
        })
       }

       const ediStudent = async(e)=>{
        e.preventDefault();
        setLoading(true)
        const response = await  putEstudiante(form,id_persona);
        if(response?.ok){
          setLoading(false)
        }
       }
    return (
        <div>
          <p>Update Student</p><br/>
          
          <Link to="/admin/estudiantes"><button className="btn__backTo">Back To</button></Link>  
          <Formulario id="form">
                            <label htmlFor="name">Name</label>
                             <Input
                             placeholder={student[0]?.name || "---" }
                             id="name"
                             name="name"
                             type="text"
                             onChange={handleChange}
                             /> 
                              <label htmlFor="lastname">Lastname</label>
                              <Input
                             placeholder={student[0]?.lastname || "----" }
                             id="lastname"
                             name="lastname"
                             type="text"
                             onChange={handleChange}
                             /> 
                             <label htmlFor="email">Email</label>
                              <Input
                             placeholder={student[0]?.email|| "---" }
                             id="email"
                             name="email"
                             type="email"
                             onChange={handleChange}
                             disabled={true}
                             /> 
                             <label htmlFor="email">New Password</label>
                             <Input
                             id="password"
                             name="password"
                             type="email"
                             onChange={handleChange}
                             /> 
                       {loading &&  <LinearProgress />} <br/>

             <button type="submit" onClick={ediStudent} className="btn__default">Update</button>
          </Formulario>
        </div>
     )
}
