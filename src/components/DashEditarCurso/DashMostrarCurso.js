import React, { useState } from 'react'
import { useFecthCurso } from '../../hooks/useFecthCurso'
import {Link} from 'react-router-dom'
import { deleteCurso } from '../../helpersAdmin/deleteCurso';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export const DashMostrarCurso = () => {
     const classes = useStyles();
     const {dataCurso:cursos}= useFecthCurso();
     const [file, setFile] = useState()
     console.log("cursos el",cursos);

     const eliminarCurso =(nombre,id)=>{
      if(window.confirm(`¿Seguro que quieres eliminar al curso: "${nombre}"?`)){
        window.location.reload();
        return deleteCurso(id);
      }
     }
     const selecteHandler = e=>{
       setFile(e.target.files[0]);
     }
     const sendHandler = (e)=>{
       e.preventDefault();
       if(!file){
         alert("you must upload file")
         return
       }
      const formdata = new FormData();
     
      formdata.append('imagenCurso',file);
 
      fetch('http://localhost:3001/files',{
        method: 'POST',
        body: formdata,
      })
      .then(res=> res.text())
      .then(res=>console.log(res))
      .catch(err=>{
       console.log(err);
      })
      document.getElementById('fileinput').value=null;

      setFile(null);
     }
     
    return (
      <>
       {/* <div>
         <p>Sube un archivo Bro</p>

        <form action="files" method="post" encType="multipart/form-data">
          <input id="fileinput" type="file" name="imagenCurso" onChange={selecteHandler}/>


          <button type="submit" onClick={sendHandler} >Enviar</button>
        </form>
         
       </div>  */}
        <div className="Container_curso">
       { cursos?.map(el=> 
       <>
      <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="/assets/img/profesor1.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {el.nombre}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                <p> <span className="negr_curso">Descripción</span> : {el.descripcion || "----"}</p>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                <p> <span className="negr_curso">Categoria: </span> {el.categoria || "----"}</p>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                <p> <span className="negr_curso">Precio: </span> {el.precio || "----"}</p>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                <p><span className="negr_curso">Duración:</span>  {el.duracion || "----"}</p>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                <p> <span className="negr_curso">Profesor: </span> {el.profesor|| "----"}</p>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to={`/admin/cursos/contenido/${el.ruta}`}>
                <Button size="small" color="primary">
                +Contenido
                </Button>
              </Link>
              <Link to={`/admin/cursos/editar/${el.ruta}`}>
                <Button size="small" color="primary">
                  Editar
                </Button>
              </Link>
              
              <Button size="small" color="secondary" onClick={()=>eliminarCurso(el.nombre,el.id)}>
                Eliminar
              </Button>
            </CardActions>
          </Card>
       </>      
       )

       }
      </div>
       
        {/* <div className="Container_curso">
             
           {    cursos?.map(el=>
                <>
            
                 <div className="categoria_cursos">
                  <div className="ID_Curso">
                         <img src={el.imagen}></img>
                          <p><span className="negr_curso">ID: </span>{el.id}</p>
                        </div>
                        <div className="nombre_Categoria">
                          <p> <span className="negr_curso">Titulo:</span>  {el.nombre}</p>
                        </div>
                        <div className="nombre_Categoria">
                          <p> <span className="negr_curso">Descripción</span> : {el.descripcion || "----"}</p>
                        </div>
                        <div className="nombre_Categoria">
                          <p><span className="negr_curso">Duración:</span>  {el.duracion || "----"}</p>
                        </div>
                        <div className="nombre_Categoria">
                          <p> <span className="negr_curso">Categoria: </span> {el.categoria || "----"}</p>
                        </div>
                        <div className="nombre_Categoria">
                          <p> <span className="negr_curso">Precio: </span> {el.precio || "----"}</p>
                        </div> 
                        <div className="nombre_Categoria">
                          <p> <span className="negr_curso">Profesor: </span> {el.profesor|| "----"}</p>
                        </div>      
                        <div className="botones_curso">
                         <Link to={`/admin/cursos/contenido/${el.ruta}`}><button className="btn_curso" id="masContenidoCurso">+ Contenido</button></Link>   
                         <Link to={`/admin/cursos/editar/${el.ruta}`}><button className="btn_curso" id="btn_editarCurso" >Editar</button></Link>   
                         <button className="btn_curso" id="btn_eliminarCurso" onClick={()=>eliminarCurso(el.nombre,el.id)}>Eliminar</button>    
                    </div>
                  </div>
               </>
               )
           }
        </div> */}
        </>
    )
}
