import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './ComponentStyles/GradeCourse.css'
import axios from 'axios';
import { useParams } from 'react-router';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ModalWindow() {
  const {id:ruta_curso} = useParams();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = useState({})
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

   const handleChange = (e) =>{
    setForm(
      {value: e.target.value}
      );
  }

  const handleSubmit =async(e)=>{
     e.preventDefault();
     const sendData = {
       ...form,
       ruta_curso
     }
     const {token} = JSON.parse(localStorage.getItem("token"));
     let config ={
       headers: {
      "Content-Type": "application/json",
      "Authorization": `${token}`,
      }}
     const response = await axios.post('http://localhost:3001/calificationCourse',sendData,config)
     setOpen(false);
  }

  return (
    <div className="container-Calification">
      <button className="btn-dejarCalificacion" type="button" onClick={handleOpen}>
        Deja una calificación
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">¿Cómo calificarías este curso?</h2>
            <form  onChange={handleChange} onSubmit={handleSubmit}> 
              <p className="clasificacion">
                <input id="radio1" type="radio" name="estrellas" value="5"/>
                <label className="calificationLabel" htmlFor="radio1">★</label>
                <input id="radio2" type="radio" name="estrellas" value="4"/>
                <label className="calificationLabel"htmlFor="radio2">★</label>
                <input id="radio3" type="radio" name="estrellas" value="3"/>
                <label className="calificationLabel"htmlFor="radio3">★</label>
                <input id="radio4" type="radio" name="estrellas" value="2"/>
                <label className="calificationLabel"htmlFor="radio4">★</label>
                <input id="radio5" type="radio" name="estrellas" value="1"/>
                <label className="calificationLabel"htmlFor="radio5">★</label>
              </p> 
              <button className="btn-enviar" type="submit">ENVIAR</button>
            </form>    
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
