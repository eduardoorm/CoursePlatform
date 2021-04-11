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
    const {dataCategoria:categorias}=useFecthGetCategoria();
    const eliminarCate=(nombre,id_categoria)=>{
      if(window.confirm(`¿Seguro que quieres eliminar la categoria : "${nombre}"?`)){
        window.location.reload();
         return deleteCategoria(id_categoria)
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
                  <StyledTableCell align="center">Categoria</StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categorias?.map((row,pos) => (
                  <StyledTableRow key={row.nombre}>
                    <StyledTableCell component="th" scope="row">
                      {pos+1}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.nombre}</StyledTableCell>
                    <StyledTableCell align="right">
                    <Link to={`/admin/categorias/editar/${row.id}`}>
                      <Button variant="contained" color="primary">
                        Editar
                    </Button></Link>   
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
                { categorias?.map((categoria,pos)=>
                <>  
                <div className="categoria_items">
                        <div className="ID_Categoria">
                          <p>{pos+1}</p>
                        </div>

                        <div className="nombre_Categoria">
                          <p>{categoria.nombre}</p>
                        </div>
                        <div className="botones_categoria">
                         <Link to={`/admin/categorias/editar/${categoria.id}`}><button className="btn_categoria" >Editar</button></Link>   
                         <button className="btn_categoria" onClick={()=>eliminarCate(categoria.nombre,categoria.id)}>Eliminar</button>    
                        </div>
                    </div> 
                </>
                )}
             </div> */}
         </>    
    )
}
