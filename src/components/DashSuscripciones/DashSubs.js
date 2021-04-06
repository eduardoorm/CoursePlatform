import React from 'react'
import { Link } from 'react-router-dom';
import { useFecthCurso } from '../../hooks/useFecthCurso';
import { useFetchGetSuscripciones } from '../../hooksAdmin.js/useFetchGetSuscripciones'

export const DashSubs = () => {
    const {dataSuscripciones: suscripciones} = useFetchGetSuscripciones();
    const {dataCurso:curso} = useFecthCurso();
    // const [clickMostrar, setclickMostrar] = useState(false)
    // const clickMostrarReporte =()=>{
    //      return (setclickMostrar(!clickMostrar))
    //   }
    console.log("cursitos",curso);
    return (
        <div className="suscripciones_container">
            {curso.map((el,pos)=>
                <div className="suscripciones_item">
                  <p>{pos+1}</p>
                  <p>{el.nombre}</p>
                 <Link to={`suscripciones/${el.ruta}`}><button className="btn_header" >Ver Reportes</button></Link> 
                </div>  
                )}
        </div>
    )
}
