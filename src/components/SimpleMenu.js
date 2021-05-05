import React from 'react'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';
import ModalWindow from './ModalWindow';
export const SimpleMenu = ({handleClose,handleCerrarSesion,handleClick,data,anchorEl}) => {

    return (
      <div className="contain__showPefil">    
            <div>
              <ModalWindow/>     
            </div>
      
                <div className="containerMenu">

                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <img src={data?.imageUrl ||"/assets/img/perfil.png" }
                    className="img__perfil"
                    /> 
                    <i className="fas fa-chevron-down" id="buton__perfil"></i>
                </Button>

                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >

                <Link to="/perfil"><MenuItem onClick={handleClose}>Mi perfil</MenuItem></Link> 
                <Link to="/aprender" ><MenuItem onClick={handleClose}>Mis Cursos</MenuItem></Link> 
                <Link to={`/certificados/${data?.id_persona}`}><MenuItem onClick={handleClose}>Mis Certificados</MenuItem></Link> 
                <Link to="/perfil"><MenuItem onClick={handleCerrarSesion}>Cerrar Sesión</MenuItem></Link> 
                </Menu>
                
            </div>
       </div>
    )
}
