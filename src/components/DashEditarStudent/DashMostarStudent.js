import React, { useMemo, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import queryString from 'query-string'
import { deleteEstudiante } from '../../helpersAdmin/deleteEstudiante';
import { useFetchGetEstudiante } from '../../hooksAdmin.js/useFetchGetEstudiante';
import { useHistory, useParams } from 'react-router-dom'
import { getStudientByEmail } from '../../selectors/getStudientByEmail';
import { useFetchGetLasFiveStudents } from '../../hooksAdmin.js/useFetchGetLasFiveStudents';
// MATERIAL UI TABLE
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import '../ComponentStyles/Dashboard.css'

   //Boton material ui
   const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    table: {
      minWidth: 700,
    },
  }));

export const DashMostarStudent = () => {
    const {dataEstudiante:estudiante}= useFetchGetEstudiante();
    const [editar, setEditar] = useState(true);
    const {dataStudent:student}= useFetchGetLasFiveStudents();
    const location = useLocation();
    const {q=''}=queryString.parse(location.search);
    const [form, setForm] = useState({
      searchText:q,
    })
    const classes = useStyles();
    
    const history = useHistory();
    const eliminarStudent=(id_persona,email)=>{
      if(window.confirm(`¿Seguro que quieres eliminar al estudiante con email : ${email}?`)){
        window.location.reload();
         return deleteEstudiante(id_persona);
      }
    }
    const {searchText} = form;
   
    const studentFiltered=useMemo(() =>  getStudientByEmail(q,estudiante), [q]);

    const handleSubmit = (e) =>{
      e.preventDefault();
      history.push(`?q=${searchText}`);
    }

    const handleSearch = (e)=>{
      e.preventDefault();
       setForm({
         ...form,
         [e.target.name] : e.target.value,
       })
    }
   
    return (
      <>
        
       <div>
         <p>Total de estudiantes: {estudiante?.length}</p>
         <br/>
         <p>Busar por email  </p>
         <form onSubmit={handleSubmit}>
           <input
            type="email"
            name="searchText"
            placeholder="Ingresa el email"
            value={searchText}
            onChange={handleSearch}
           />
           <button type="submit" className="btn-default">Buscar</button>
         </form>
       </div>
       <br/>
       <div>
         <h4>Results</h4> 
         <hr/>
         {(q==='' )
           && <div>
             Search a Student
           </div>
         }
         {(q !=='' && studentFiltered.length===0 )
           &&
            <div>
             No se encontro el estudiante con email {q}
           </div>

         }
      </div>
           <div className="Container_categoria">
              {
                studentFiltered?.map(student=>
                  <>
                  <div className="categoria_items">
                      <div className="nombre_Categoria">
                        <p>{student.nombre}</p>
                      </div>
                      <div className="nombre_Categoria">
                        <p>{student.apellidos || "----"}</p>
                      </div>
                      <div className="nombre_Categoria">
                        <p>{student.email || "----"}</p>
                      </div>
                      <div className="botones_categoria">
                      <Link to={`/admin/estudiante/editar/${student.id}`}><button className="btn_categoria" >Editar</button></Link>   
                      <button className="btn_categoria" onClick={()=>eliminarStudent(student.id_persona,student.email)}>Eliminar</button>    
                      </div>
                  </div>  
                  </>
                )
               }
            </div>
            {/* ULTIMOS ESTUDIANTES */}
            <br/><br/>
            <h3>Ultimos 5 estudiantes registrados</h3>
            <br/>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Pos</StyledTableCell>
                  <StyledTableCell align="left">Nombres</StyledTableCell>
                  <StyledTableCell align="left">Apellidos</StyledTableCell>
                  <StyledTableCell align="left">Email</StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {student?.map((row,pos) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                      {pos+1}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.nombre}</StyledTableCell>
                    <StyledTableCell align="left">{row.apellidos}</StyledTableCell>
                    <StyledTableCell align="left">{row.email}</StyledTableCell>
                    <StyledTableCell align="right">
                    <Link to={`/admin/estudiante/editar/${row.id}`}>
                    <Button id="btn_Editar" variant="contained" color="primary">
                        Editar
                    </Button>
                      </Link>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Button
                        id="btn_Eliminar"
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        onClick={()=>eliminarStudent(row.id_persona,row.email)}
                        // startIcon={<DeleteIcon />}
                      >
                        Eliminar
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
           
         </>
    )
}
