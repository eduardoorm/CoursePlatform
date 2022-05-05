import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {useFecthGetCategoria} from '../../hooksAdmin.js/useFecthGetCategoria'
import { deleteCategoria } from '../../helpersAdmin/deleteCategoria';
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
export const DashMostrarCategoria = () => {
    const {dataCategoria:categories}=useFecthGetCategoria();
    const removeCategory=(name,id_category)=>{
      if(window.confirm(`¿Are you sure you want to delete the category : "${name}"?`)){
        window.location.reload();
         return deleteCategoria(id_category)
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
                  <StyledTableCell align="center">Category</StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categories?.map((row,pos) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {pos+1}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.name}</StyledTableCell>
                    <StyledTableCell align="right">
                    <Link to={`/admin/categorias/editar/${row.id}`}>
                      <Button id="btn_Editar" variant="contained" color="primary">
                        Edit
                    </Button></Link>   
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Button
                      id="btn_delete"
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        onClick={()=>removeCategory(row.name,row.id)}
                        // startIcon={<DeleteIcon />}
                      >
                        Remove
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
