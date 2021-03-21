         
export default function DescripcionVideo({descripcion,duracion,nombre}) {
    return(
        <>
           <div className="footer-reproductor">
               <h3>{nombre}</h3>
               <div>
                    <button className="Anterior"> <i className="fas fa-angle-left"></i> Anterior</button>
                    <button className="Siguiente">Siguiente <i className="fas fa-angle-right"></i></button>
               </div>
               
           </div>

           <div className="descrip-video">
            <p>{descripcion}</p>
           </div>

           </>
    )     
}
           
           
     