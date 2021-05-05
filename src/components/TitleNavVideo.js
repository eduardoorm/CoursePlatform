import React from 'react'
import {Link} from 'react-router-dom';

export const TitleNavVideo = ({nombre}) => {
    return (
        <div className="navbar-preview-titulo">
                <Link to="/">
                    <i className="fab fa-reddit" id="icon_videoReproductor"></i>
                  </Link> 
                <p>{nombre}</p> 
        </div> 
    )
}
