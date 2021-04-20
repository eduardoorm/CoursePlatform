import React from 'react'
import { Link } from 'react-router-dom';
import { useFecthCurso } from '../../hooks/useFecthCurso';
import { useFetchGetSuscripciones } from '../../hooksAdmin.js/useFetchGetSuscripciones'
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

export const DashSubs = () => {
    const {dataCurso:curso} = useFecthCurso();
    const classes = useStyles();
    return (
        <>
        <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Pos</StyledTableCell>
                    <StyledTableCell align="left">Nombres</StyledTableCell>
                    <StyledTableCell align="right"></StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {curso?.map((row,pos) => (
                    <StyledTableRow key={row.id}>
                      <StyledTableCell component="th" scope="row">
                        {pos+1}
                      </StyledTableCell>
                      <StyledTableCell align="left">{row.nombre}</StyledTableCell>
                      <StyledTableCell align="right">
                      <Link to={`suscripciones/${row.ruta}`}>
                      <Button variant="contained" color="primary">
                          Ver Reportes
                      </Button>
                        </Link>
                      </StyledTableCell>
                    
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

        </>
    )
}
