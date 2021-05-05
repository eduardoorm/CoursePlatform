import React from 'react'
import './ComponentStyles/Dashboard.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export const DashNav = () => {
    const classes = useStyles();

    return (
        /*NAVBAR */
        <>
       <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            INTESLA EDUCATION
          </Typography>
           <a href="/ " target="_blank"> <Button color="inherit">Ver Sitio Web</Button></a>
          
        </Toolbar>
      </AppBar>
        {/* <nav id="DashNav_Container">
            <div className="DashNav_Item">
              <li>INTESLA</li>
            <li><a href="/ " target="_blank">Visit website</a></li>
            </div>   
            <div className="DashNav_Item">        
                <li>Erick Romucho</li>
            </div>           
        </nav> */}
         </>
    )
}
