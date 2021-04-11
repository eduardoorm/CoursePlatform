import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router'

export const PurchaseMade = () => {
    const x = useParams()
    // axios.get("http://localhost:3001/execute-payment")
    return (
        <div>
          <p> HOLA HAS REALIZADO EL PAGO CON EXITO :D</p>
        </div>
    )
}
