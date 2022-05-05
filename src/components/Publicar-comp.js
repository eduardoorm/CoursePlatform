
import './ComponentStyles/Perfil-comp.css'
import React, {useState} from "react";
import AddSeccion from './AddSeccion'
import MessagePost from './MessagePost'
import {Btn} from './Button'
export default function PublicarComp () {
    const [elemento, setElemento] = useState([]);
    const [form,setForm] = useState({});
    const [formMod,setFormMod] = useState({})
    const [nom_modulo,setModulo]= useState([]);
    
    const[cantVidPorMod,setcantVidporMod] = useState([])

    const [formVid,setFormVid] = useState({})
    const [nom_video,setVideo] = useState([])

    const addSection =()=>{
        setElemento(el =>[...el,1])
    }

    const handleChange=(e)=>{
      setForm({
        ...form,
        [e.target.name]:e.target.value
      })    
   
    }
    

    const handleChangeModulo=(e)=>{
      setFormMod({
        ...formMod,
        [e.target.name]:e.target.value
      })    
    }

    const handleChangeVideo=(e)=>{
      setFormVid({
        ...formVid,
        [e.target.name]:e.target.value
      })
     
    }
    
    const publicarCurso=(e)=>{
      e.preventDefault();
      setModulo(Object.values(formMod));
      setVideo(Object.values(formVid));
      const formFiles= {...form,nom_modulo,nom_video}

      const {token} = JSON.stringify(localStorage.getItem("token"));
      async function fetchFile(){
        let config ={
          method:"POST",
          headers:{
            "Content-Type":"application/json",
            "Authorization":`${token}`
          },
          body:JSON.stringify(formFiles)
        }
         await fetch('http://localhost:3001/files',config)
      }
      fetchFile();
    }
    
    return(
     <section className="publicar-curso">
          <h1 >Publish course</h1>
          <MessagePost/>
        <div className="contenedor-publicarCurso">    
        <h3>Subir imagen de portada</h3>
         <input type="file"/>
         <h3>Upload cover image</h3>
            <input type="Text" name="nom_curso" placeholder="Nombre del Curso" onChange={handleChange} />
            <br/><br/> 
         <h3>Course Description</h3>
            <input type="Text" name="des_curso" placeholder="Nombre del Curso" onChange={handleChange} />
            <br/><br/> 
         <h3>Course price</h3>
            <input type="number" name="precio_curso" placeholder="Precio del curso" onChange={handleChange}/>
            <br/><br/> 
          <h3>Fecha del curso</h3>
            <input type="date" name="fecha_curso" placeholder="Precio del curso" onChange={handleChange} />
            <br/><br/> 
          <h3>Course date</h3>
            { elemento.map((i,posi)=><AddSeccion pos={posi+1} onChange={handleChangeModulo} cambiar={handleChangeVideo}/>)}
        </div>
          <button className="btn-plus" onClick={addSection}>
            <i className="fas fa-plus"></i>
          </button>
          <br/>
          <Btn style="btn-default" value="Publicar Curso" onClick={publicarCurso}></Btn>
     </section>
        )
    }


 