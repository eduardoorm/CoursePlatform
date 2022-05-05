import React, {Component} from 'react';
import './ComponentStyles/Footer.css'

class Footer extends Component{
    render(){
        return( 
        <footer>
            <hr/>
             <div className="fo-container">
                <div className="fo-item-up">
                    <div className="fo-item-up-1">
                       <p>Content.</p>
                        <a href="#">Teach at Intesla</a> 
                        <a href="#">Who are we?</a>
                    </div>
                    <div className="fo-item-up-1">
                       <p>Courses</p>
                        <a href="#">Get in touch with us</a>
                        <a href="#">Privacy Policy</a>
                    </div>    
                    <div className="fo-item-up-1">
                        <p>Legal</p>
                        <a href="#">Terms and conditions of service</a> 
                    </div>       
                </div>
                <div className="fo-item-down">
                    <h2>Les't Learn</h2>
                    <p>@2022 Eduardo Ormeño, Inc.</p>
                </div>
              </div>
        </footer>
        )
    } 
}
export default Footer;