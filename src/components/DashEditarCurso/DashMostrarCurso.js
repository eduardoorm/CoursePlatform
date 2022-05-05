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
     const {dataCurso:courses}= useFecthCurso();

     const deleteCourse =(name,id)=>{
      if(window.confirm(`¿Surely you want to eliminate the course: "${name}"?`)){
        window.location.reload();
        return deleteCurso(id);
      }
     }
 
    return (
      <>
        <div className="container__course">
       { courses?.map(el=> 
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
                          {el.name}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                          <><span className="negr_curso">Description</span> : {el.description || "----"}</>
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                          <><span className="negr_curso">Category: </span> {el.category || "----"}</>
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                          <><span className="negr_curso">Price: </span> {el.price || "----"}</>
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                          <><span className="negr_curso">Duration:</span>  {el.duration || "----"}</>
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                          <><span className="negr_curso">Teacher: </span> {el.nameTeacher|| "----"} {el.lastnameTeacher|| "----"}</>
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                          <><span className="negr_curso">Lessons: </span> {el.lessons|| "----"} </>
                          </Typography>
                      </CardContent>
                      
                </CardActionArea>

                <CardActions>

                  <Link to={`/admin/cursos/contenido/${el.url}`}>
                    <Button size="small" color="primary">
                    +Content
                    </Button>
                  </Link>
                  <Link to={`/admin/cursos/editar/${el.url}`}>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </Link>
                  
                  <Button size="small" color="secondary" onClick={()=>deleteCourse(el.name,el.id)}>
                    Delete
                  </Button>
                </CardActions>
              </Card>
        
         )
        }
      </div>
    
        </>
    )
}
