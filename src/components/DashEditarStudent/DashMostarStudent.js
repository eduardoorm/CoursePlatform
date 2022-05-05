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
    const {dataStudent:student}= useFetchGetLasFiveStudents();
    const location = useLocation();
    const {q=''}=queryString.parse(location.search);
    const [form, setForm] = useState({
      searchText:q,
    })
    const classes = useStyles();
    
    const history = useHistory();
    const deleteStudent=(id_person,email)=>{
      if(window.confirm(`¿Are you sure you want to remove the student with email : ${email}?`)){
        window.location.reload();
         return deleteEstudiante(id_person);
      }
    }
    const {searchText} = form;
   
    const studentFiltered=useMemo(() =>  getStudientByEmail(q,student), [q]);

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
         <p>Total de students: {student?.length}</p>
         <br/>
         <p>Search by email  </p>
         <form onSubmit={handleSubmit}>
           <input
            type="email"
            name="searchText"
            placeholder="Enter email address"
            value={searchText}
            onChange={handleSearch}
           />
           <button type="submit" className="btn__default">Search</button>
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
             No student found with email {q}
           </div>

         }
      </div>
           <div className="container__category">
              {
                studentFiltered?.map(student=>
                  <>
                  <div className="category__items">
                      <div className="category__name">
                        <p>{student.name}</p>
                      </div>
                      <div className="category__name">
                        <p>{student.lastname || "----"}</p>
                      </div>
                      <div className="category__name">
                        <p>{student.email || "----"}</p>
                      </div>
                      <div className="buttons__category">
                      <Link to={`/admin/estudiante/editar/${student.id}`}><button className="btn__category" >Edit</button></Link>   
                      <button className="btn__category" onClick={()=>deleteStudent(student.id_person,student.email)}>Delete</button>    
                      </div>
                  </div>  
                  </>
                )
               }
            </div>
            {/* ULTIMOS ESTUDIANTES */}
            <br/><br/>
            <h3>Last 5 students registered</h3>
            <br/>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Pos</StyledTableCell>
                  <StyledTableCell align="left">Name</StyledTableCell>
                  <StyledTableCell align="left">Lastname</StyledTableCell>
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
                    <StyledTableCell align="left">{row.name}</StyledTableCell>
                    <StyledTableCell align="left">{row.lastname}</StyledTableCell>
                    <StyledTableCell align="left">{row.email}</StyledTableCell>
                    <StyledTableCell align="right">
                    <Link to={`/admin/estudiante/editar/${row.id}`}>
                    <Button id="btn__edit" variant="contained" color="primary">
                        Edit
                    </Button>
                      </Link>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Button
                        id="btn__delete"
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        onClick={()=>deleteStudent(row.id_person,row.email)}
                      >
                        Delete
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
