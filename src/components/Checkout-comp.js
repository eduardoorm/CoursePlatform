import React , {Component} from 'react'
import './ComponentStyles/Chekout-comp.css'

export default class CheckoutComp extends Component {
  
    constructor(props){
       super(props)
   }

   render(){
       return(
          <>
    <section className="section-checkout">
    <div className="checkout">
        <div className="checkout-left">
            <h1>Pagar</h1>
            <div className="checkout-checkbox">    
                    <label><input type="radio" className="input-checkout" name="opcion" id=""/> Nueva tarjeta de Pago</label><br/>
                    <label><input type="radio" className="input-checkout" name="opcion" id=""/> Paypal</label>
            </div>

            <div className="checkout-form">
                <form action="post" method="POST" >
                    <input type="text" name="" id="checkout-form-item" placeholder="Nombre en la tarjeta"/>
                    <input type="text" name="" id="checkout-form-item" placeholder="Número de tarjeta"/>
                    <input type="text" name="" id="checkout-form-item" placeholder="MM / AA"/>
                    <input type="text" name="" id="checkout-form-item" placeholder="CVC"/>
                    <input type="text" name="" id="checkout-form-item" placeholder="Código postal"/>
                </form>
            </div>

            <h2>Detalles del pedido</h2>
            <div className="checkout-detalle">
                <div className="checkout-detalle-img" ><img src="assets/img/curso-intesla.jpg" alt="imagen-detalle-checkout"
                 className="img-checkout-detalle"/></div>
                <div className="checkout-detalle-titulo" >Diseño de Instalacion Electricas con AUTOCAD</div>
                <div className="checkout-detalle-precio" >129,99 US$</div>
            </div>
        </div>
        
            
            <div className="checkout-right">
                <div className="fixed-checkout-right">
                    <h2>Resumen</h2>
                    <div className="checkout-right-precio"><p className="checkout-right-precio-p1">Precio original:</p> 
                    <p>129,99 US$</p></div>
                    <hr/>
                    <div className="checkout-right-total"><p className="checkout-right-precio-p2" > 
                    <span className="checkout-right-precio-total">Total:</span> </p> 
                        <p> <span className="checkout-right-precio-dolares">129,99 US$</span></p>
                    </div>  
                    <p id="text-checkout-right">Intesla está obligado por ley a recaudar los impuestos sobre las
                        transacciones de las compras realizadas en determinadas jurisdicciones fiscales.</p>
                    <p id="text-checkout-right">Al completar la compra, aceptas estasa 
                    <a href="#" className="condiciones-uso-link"> Condiciones de uso</a>.</p>
                    <button className="realizar-pago">Realizar Pago</button>
                </div>
            </div>
        </div>
    
    </section>

          </>
       )
   }

} 