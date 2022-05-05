import React, { useState } from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import { Formulario } from '../../elementos/Formularios';
import Input from '../Input';
import { useFetchVideoID } from '../../hooks/useFetchVideoID';
import { putVideo } from '../../helpersAdmin/putVideo';
import LinearProgress from '@material-ui/core/LinearProgress';

export const DashEditarLesson = () => {
    let {id}= useParams();
    const [form, setform] = useState({});
    const history= useHistory()
    const {dataVideo:video} =  useFetchVideoID(id);
    const [loading, setLoading]= useState(false);

    const handleChange =(e)=>{
      setform({
        ...form,
        [e.target.name]:e.target.value
      })
     }
     
     const editarLesson = async(e)=>{
      e.preventDefault();
      setLoading(true)
      const response = await putVideo(form,id);
      if(response.ok) return setLoading(false)
     }
    
    return (
        <div>
        <button className="btn__backTo" onClick={()=>{history.goBack()}}>Back To</button>
        <Formulario id="form">
                            <label htmlFor="name">Name</label>
                            <Input
                           placeholder={video[0]?.name}
                           id="name"
                           name="name"
                           type="text"
                           onChange={handleChange}
                           /> 
                            <label htmlFor="name">Desctiption</label>
                            <Input
                           placeholder={video[0]?.description}
                           id="description"
                           name="description"
                           type="text"
                           onChange={handleChange}
                           /> 
                           <label htmlFor="name">Duración</label>
                            <Input
                           placeholder={video[0]?.duration }
                           id="duration"
                           name="duration"
                           type="number"
                           onChange={handleChange}
                           /> 
                           <br/>
                           {loading &&  <LinearProgress />} 
                           <br/>
           <button type="submit" className="btn-default" onClick={editarLesson}>Update</button>
        </Formulario>
      </div>
    )
}
