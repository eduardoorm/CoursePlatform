import React from 'react'
import './ComponentStyles/Dashboard.css'
export const DashNav = () => {
    return (
        <nav id="DashNav_Container">
            <div className="DashNav_Item">
              <li>Intesla</li>
            </div>
           
            <div className="DashNav_Item">
                <li>Visit website</li>
                <li>Admin</li>
            </div>           
        </nav>
    )
}
