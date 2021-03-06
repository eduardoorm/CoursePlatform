import React from 'react'
import { useParams } from 'react-router';
import { useFetchGetSubsByCursoID } from '../../hooksAdmin.js/useFetchGetSubsByCursoID'
import {Link, useHistory} from 'react-router-dom'
// MATERIAL UI TABLE
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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

export const DashMostrarReportes = () => {
      const {id}=useParams();
      const history= useHistory()
      const {dataSuscripciones:subs} = useFetchGetSubsByCursoID(id);
      const classes = useStyles();
     
    return (
        <div className="container__category">
        <button className="btn__backTo" onClick={()=>{history.push(`/admin/suscripciones`)}}>Back To</button>
            {
                (subs?.length===0) &&
                <h4>This course has no registered students yet </h4>
            }
             <h3>{subs[0]?.name_course}</h3>
             <br/>
             <p>Number of students: {subs?.length}</p>
             <br/>
             {subs?.length !==0 &&
             <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Pos</StyledTableCell>
                    <StyledTableCell align="left">Name</StyledTableCell>
                    <StyledTableCell align="left">LastName</StyledTableCell>
                    <StyledTableCell align="left">Email</StyledTableCell>
                    <StyledTableCell align="left"></StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                   {  subs?.map((row,pos) => (
                    <StyledTableRow key={row.email}>
                      <StyledTableCell component="th" scope="row">
                        {pos+1}
                      </StyledTableCell>
                      <StyledTableCell align="left">{row.name}</StyledTableCell>
                      <StyledTableCell align="left">{row.apellidos}</StyledTableCell>
                      <StyledTableCell align="left"> {row.email} </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
           }
     
  </div>
    )
}
