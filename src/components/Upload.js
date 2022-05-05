import React from 'react'
import { useState,useEffect } from 'react';

export const Upload = () => {
        const array = ["pepito","juanito","alejito","anita"];
        const value= array[2];
        const position = array.indexOf(value);
        const [index, setIndex] = useState(position)
        const [preview, setPreview] = useState(false)
        const [siguiente, setSiguiente] = useState(false)

        useEffect(() => {
            (position!==0) ? setPreview(true) : setPreview(false);
            (position+1!==array.length) ? setSiguiente(true) : setSiguiente(false)
        }, [position])

        const btnAnterior = ()=>{
            (index === 0)? setIndex(0) : setIndex(index-1)
        }

        const btnSiguiente = ()=>{
            (index+1 === array.length)? setIndex(0) : setIndex(index+1)
        }

        return (
        <>
        
        <div id="box">
            <h3>{array[index]}</h3>
           { preview && <button onClick={btnAnterior}>Anterior</button>}
           { siguiente && <button onClick={btnSiguiente}>Siguiente</button>  }
        </div>

       </>
    )
}
