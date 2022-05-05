import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useFetchGetInstructor } from '../../hooksAdmin.js/useFetchGetInstructor';
import { deleteProfesor } from '../../helpersAdmin/deleteProfesor';
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

export const DashMostrarPofesor = () => {
    // const {dataCategoria:categorias}=useFecthGetCategoria();
      const {dataProfesor:teacher}=useFetchGetInstructor();

      const deleteCategory=(name,id_teacher)=>{
          if(window.confirm(`Are you sure you want to eliminate the teacher : "${name}"?`)){
            window.location.reload();
            return deleteProfesor(id_teacher)
          }
        }

        const classes = useStyles();
    return (
      <>
  <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Pos</StyledTableCell>
                    <StyledTableCell align="left">Name</StyledTableCell>
                    <StyledTableCell align="left">LastName</StyledTableCell>
                    <StyledTableCell align="left"></StyledTableCell>
                    <StyledTableCell align="left"></StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {teacher?.map((row,pos) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {pos+1}
                      </StyledTableCell>
                      <StyledTableCell align="left">{row.name}</StyledTableCell>
                      <StyledTableCell align="left">{row.lastname}</StyledTableCell>
                      <StyledTableCell align="right">
                      <Link to={`/admin/profesor/editar/${row.id}`}>
                      <Button id="btn_Editar" variant="contained" color="primary" >
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
                          onClick={()=>deleteCategory(row.name,row.id)}
                          // startIcon={<DeleteIcon />}
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
