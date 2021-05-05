import React, { useState } from 'react'
import { useMemo } from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom'
import { deleteCertificado } from '../../helpersAdmin/deleteCertificado';
import { useFetchGetCertificado } from '../../hooksAdmin.js/useFetchGetCertificado';
import {useFecthGetLastFiveCertificate} from '../../hooksAdmin.js/useFecthGetLastFiveCertificate'
import queryString from 'query-string'
import { getCertificateByEmail } from '../../selectors/getCertificateByEmail';
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
export const DashMostrarCertificados = () => {
    const classes = useStyles();
    const {dataCertificate:certificados}= useFecthGetLastFiveCertificate()
    
    const location = useLocation();
    const {q=''}=queryString.parse(location.search);
    const [form, setForm] = useState({
      searchText:q,
    })
    const history = useHistory();
    const certificadoFiltered=useMemo(() =>  getCertificateByEmail(q,certificados), [q]);
    const {searchText} = form;

    const handleSearch = (e)=>{
      e.preventDefault();
       setForm({
         ...form,
         [e.target.name] : e.target.value,
       })
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
      history.push(`?q=${searchText}`);
    }
  
   
    const eliminarCertificado=(id_certificado,nombre_curso,certificado_email)=>{
      if(window.confirm(`¿Seguro que quieres eliminar al certificado: "${nombre_curso}" del email : "${certificado_email}"?`)){
        window.location.reload();
         return deleteCertificado(id_certificado);
      }
    }
    return (
      <>
     
      <div>
      <p>Total de Certificados: {certificados?.length}</p>
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
             Search Certificate
           </div>
         }
         {(q !=='' && certificadoFiltered.length===0 )
           &&
            <div>
             No se encontro el estudiante con email {q}
           </div>

         }
      </div>

       <br/>
       <div className="Container_categoria">
                { certificadoFiltered?.map((certificado,pos)=>
                <>  
                    <div className="categoria_items" >
                        <div className="ID_Categoria">
                          <p>{pos+1}</p>
                        </div>
                        <div className="nombre_Categoria">
                          <p>{certificado.email|| "----"}</p>
                        </div>
                        <div className="nombre_Categoria">
                          <p>{certificado.nombre_curso}</p>
                        </div>
                        <div className="botones_categoria">
                         <Link to={`/admin/certificados/editar/${certificado.id_certificado}`}>
                           <button className="btn_categoria" >Editar</button>
                        </Link>   
                         <button className="btn_categoria"
                          onClick={()=>eliminarCertificado(certificado.id_certificado,certificado.nombre_curso,certificado.email)}>
                           Eliminar</button>    
                        </div>
                    </div> 
                </>
                )}
          </div>

          <br/>
          <h4>Certificados Recientes:</h4> <br/>
         <hr/>
         <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Pos</StyledTableCell>
                    <StyledTableCell align="left">Email</StyledTableCell>
                    <StyledTableCell align="left">Curso</StyledTableCell>
                    <StyledTableCell align="right"></StyledTableCell>
                    <StyledTableCell align="right"></StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {certificados?.map((row,pos) => (
                    <StyledTableRow key={row.id_certificado}>
                      <StyledTableCell component="th" scope="row">
                        {pos+1}
                      </StyledTableCell>
                      <StyledTableCell align="left">{row.email}</StyledTableCell>
                      <StyledTableCell align="left">{row.nombre_curso}</StyledTableCell>
                      <StyledTableCell align="right">
                      <Link to={`/admin/certificados/editar/${row.id_certificado}`}>
                      <Button id ="btn_Editar" variant="contained" color="primary">
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
                          onClick={()=>eliminarCertificado(row.id_row,row.nombre_curso,row.email)}
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
