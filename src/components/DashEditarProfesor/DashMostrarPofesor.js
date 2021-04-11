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
      const {dataProfesor:profesor}=useFetchGetInstructor();

      const eliminarCate=(nombre,id_profesor)=>{
          if(window.confirm(`¿Seguro que quieres eliminar al profesor : "${nombre}"?`)){
            window.location.reload();
            return deleteProfesor(id_profesor)
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
                    <StyledTableCell align="left">Nombres</StyledTableCell>
                    <StyledTableCell align="left">Apellidos</StyledTableCell>
                    <StyledTableCell align="left"></StyledTableCell>
                    <StyledTableCell align="left"></StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {profesor?.map((row,pos) => (
                    <StyledTableRow key={row.nombre}>
                      <StyledTableCell component="th" scope="row">
                        {pos+1}
                      </StyledTableCell>
                      <StyledTableCell align="left">{row.nombre}</StyledTableCell>
                      <StyledTableCell align="left">{row.apellidos}</StyledTableCell>
                      <StyledTableCell align="right">
                      <Link to={`/admin/profesor/editar/${row.id}`}>
                      <Button variant="contained" color="primary">
                          Editar
                      </Button>
                        </Link>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <Button
                          variant="contained"
                          color="secondary"
                          className={classes.button}
                          onClick={()=>eliminarCate(row.nombre,row.id)}
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
        {/* <div className="Container_categoria">
                { profesor?.map((profesor,pos)=>
                <>  <div className="categoria_items">
                        <div className="ID_Categoria">
                          <p>{pos+1}</p>
                        </div>

                        <div className="nombre_Categoria">
                          <p>{profesor.nombre} {profesor.apellidos}</p>
                        </div>

                        <div className="botones_categoria">
                         <Link to={`/admin/profesor/editar/${profesor.id}`}><button className="btn_categoria" >Editar</button></Link>   
                         <button className="btn_categoria" onClick={()=>eliminarCate(profesor.nombre,profesor.id)}>Eliminar</button>    
                        </div>
                    </div> 
                </>
                )}
             </div> */}

      </>
    )
}
