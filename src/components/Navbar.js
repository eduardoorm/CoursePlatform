import React, {useState,useEffect} from 'react';
import {Link,useHistory, useParams} from 'react-router-dom';
import {Btn} from './Button.js'
import {TitleIntesla,NavbarRight} from '../elementos/Navbar-elementos'
import { Oferta } from './Oferta';
import {countdown,getFecha} from './Reloj'
import { UseFecthUsuario } from '../hooks/useFecthUsuario';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
//del logueado
import { fade, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import './ComponentStyles/Navbar.css'
import { NavbarLogueado } from './NavbarLogueado.js';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },  grow: {
        flexGrow: 1
      },
      menuButton: {
        marginRight: theme.spacing(2)
      },
      
  //const del navbar logueado
      title: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
          display: "block"
        }
      },
      search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
          backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
          marginLeft: theme.spacing(3),
          width: "auto"
        }
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      inputRoot: {
        color: "inherit"
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
          width: "20ch"
        }
      },
      sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
          display: "flex"
        }
      },
      sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
          display: "none"
        }
      }
  }));

export default function NavBar() {
    const classes = useStyles();
     const[sesion,setSesion] = useState(false);
     const[clickPerfil,setClickPerfil] = useState(false);
     const history = useHistory();
     const{data}= UseFecthUsuario();
     const handlPerfil = () =>{
         (clickPerfil) ?   setClickPerfil(false) : setClickPerfil(true);
     }

     useEffect(()=>{
        if(localStorage.getItem("token")){
            return setSesion(true);
        }
        countdown(getFecha(), "Feliz cumpleaños");
        
     })
     const handleCerrarSesion =()=>{
         localStorage.clear();
         setAnchorEl(null);
         handleMobileMenuClose();
         setClickPerfil(false);
         history.replace("/login");
         return setSesion(false);
     }
  //DEL LOGUEADO:
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to ="/perfil"><MenuItem onClick={handleMenuClose}>Mi perfil</MenuItem></Link>
      <Link to={`/certificados/${data?.id_persona}`}>
          <MenuItem onClick={handleMenuClose}>Mis certificados</MenuItem>
      </Link>
      <Link to="/aprender"><MenuItem onClick={handleMenuClose}>Mis cursos</MenuItem></Link>
      <Link to ="/login"><MenuItem onClick={handleCerrarSesion}>Cerrar Sesión</MenuItem></Link>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge color="secondary">
            <i className="fas fa-book"></i>
          </Badge>
        </IconButton>
        <Link to="/aprender" > <p>Mis Cursos</p></Link>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge color="secondary">
          <i className="fas fa-certificate"></i>
          </Badge>
        </IconButton>
        <Link to={`/certificados/${data?.id_persona}`}><p>Certificados</p></Link>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton> 
          Perfil
      </MenuItem>
    </Menu>
  );
       return(

       <>
        <Oferta/>
        
        {/* NAVBAR PARA USUARIO NO REGISTRADOS */}
        {
           (!sesion) && 
            <div className={classes.root}>
            <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" className={classes.title}>
            <Link to='/'>Intesla Education </Link> 
            </Typography>
            <Link to='/login'><Button color="inherit">Login</Button>  </Link>
            </Toolbar>
        </AppBar>
        </div>
        }
        
       {/* NAVBAR PARA USUARIOS REGISTRADOS*/}
       {    
        
        sesion
        &&
       <div className={classes.grow}>
       <AppBar position="static">
         <Toolbar>
         <Link to='/'> 
             Intesla Education 
           </Link>
           <div className={classes.grow} />
           <div className={classes.sectionDesktop}>
             <IconButton aria-label="show 4 new mails" color="inherit">
               Enseña en Intesla
             </IconButton>
             <IconButton aria-label="show 17 new notifications" color="inherit">
            <Link to="/collections">Cursos </Link>   
             </IconButton>
             <IconButton
               edge="end"
               aria-label="account of current user"
               aria-controls={menuId}
               aria-haspopup="true"
               onClick={handleProfileMenuOpen}
               color="inherit"
             >
               <AccountCircle />
             </IconButton>
           </div>
           <div className={classes.sectionMobile}>
             <IconButton
               aria-label="show more"
               aria-controls={mobileMenuId}
               aria-haspopup="true"
               onClick={handleMobileMenuOpen}
               color="inherit"
             >
               <MoreIcon />
             </IconButton>
           </div>
         </Toolbar>
       </AppBar>
       {renderMobileMenu}
       {renderMenu}
     </div>
       }
        
        {/* <nav id={"navBar"}>
        <div className="row">
            <Link to='/'><TitleIntesla><span className="li_navbar">Intesla Education</span></TitleIntesla></Link>
                <ul className="main-nav">  
                <Link ><li id="li_navbar">Enseña en Intesla</li> </Link>
                <Link to='/collections'><li id="li_navbar">Cursos</li> </Link>          
                    {sesion ? 
                       <NavbarRight>
                           <li>
                               <div className="contain__showPefil">           
                                  <Btn 
                                  onClick={handlPerfil} 
                                  value={
                                  <>
                                  <img src="/assets/img/perfil.png" 
                                  className="img__perfil"
                                  /> 
                                  <i className="fas fa-chevron-down" id="buton__perfil"></i>
                                  </>
                                  }
                                  style="btn_mostrarPerfil"/>
                               </div>

                               {clickPerfil &&
                                <ul className="lista__miPerfil">
                                  <li>
                                    <Link
                                     to="/Perfil">
                                     <button className="btn_verPerfil" onClick={()=>setClickPerfil(false)}>Mi perfil</button> 
                                     </Link>
                                  </li>
                                  <li id="id_liNav">
                                    <Link to={`/certificados/${data?.id_persona}`}>Mis Certificados </Link> 
                                  </li> 
                                  <li id="id_liNav">
                                      <Link>Mis Cursos </Link> 
                                  </li>
                                  <li id="li__cerrarSesion">
                                    <Btn 
                                        value={<><i className="fas fa-sign-out-alt"></i><span>Cerrar Sesión</span></>} 
                                        style="btn__cerrarSesion"  
                                        onClick={handleCerrarSesion}/>
                                  </li> 
                                </ul>    
                               }     
                           </li>          
                        </NavbarRight>
                   :
                        <NavbarRight>
                            <li>
                                <Link to='/login'>
                                <Btn value="Iniciar Sesión" style="iniciar-sesion"/>
                                </Link>
                            </li>
                            <li>
                                <Link to='/register'>
                                <Btn value="Regístrate" style="registrarse"/>
                                </Link>
                            </li>    
                        </NavbarRight>
                }      
 
                </ul> 
              </div>
            </nav> */}
          </>
       )
}

