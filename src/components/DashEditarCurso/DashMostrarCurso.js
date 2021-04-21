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
      console.log("cursitos",cursos);

     const eliminarCurso =(nombre,id)=>{
      if(window.confirm(`¿Seguro que quieres eliminar al curso: "${nombre}"?`)){
        window.location.reload();
        return deleteCurso(id);
      }
     }
 
    return (
      <>
        <div className="Container_curso">
       { cursos?.map(el=> 
        
          <Card className={classes.root} key={el.id}>
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
                          <><span className="negr_curso">Descripción</span> : {el.descripcion || "----"}</>
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                          <><span className="negr_curso">Categoria: </span> {el.categoria || "----"}</>
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                          <><span className="negr_curso">Precio: </span> {el.precio || "----"}</>
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                          <><span className="negr_curso">Duración:</span>  {el.duracion || "----"}</>
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                          <><span className="negr_curso">Profesor: </span> {el.nombreInstructor|| "----"} {el.apellidoInstructor|| "----"}</>
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                          <><span className="negr_curso">Lecciones: </span> {el.lecciones|| "----"} </>
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
        
         )
        }
      </div>
    
        </>
    )
}
