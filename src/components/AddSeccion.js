import React, { useEffect, useState } from "react";
import AddArchivo from "./AddArchivo";

export default function AddSeccion(props) {
  const [elemento, setElemento] = useState([]);
  const[contador,setContador]= useState(1);
  const agregar =()=>{
      setElemento(el =>[...el,1]);
      setContador(contador+1);
  }
  
  
  return (
    <>
      <div className="publicar-seccion">
        <div className="titulo-seccion">
          <p>Modulo {props.pos}: </p>
          <i className="far fa-file-alt"></i>
          <input type="text" placeholder="Ingrese nombre del modulo" name={"modulo"+props.pos} onChange={props.onChange}/>
        </div>
        <button className="btn" >Eliminar </button>
        <div className="clase-seccion">
         {
             elemento.map((i,pos)=><AddArchivo numModulo={props.pos} pos={pos+1} onChange={props.cambiar}/>)
         }
        </div>

        <button className="btn-plus" onClick={agregar}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </>
  );
}
