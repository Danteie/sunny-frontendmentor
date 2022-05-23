import React from "react";
import './Social.css'
import fb from './fb.webp'
import insta from './insta.webp'
import twiter from './twiter.webp'
import pint from './pint.webp'


function Social(props) {
    return(
        <article className="social">
            <a href="test"><img alt="fb" src={fb} className="social-icon"/></a>   
            <a href="test"><img alt="instagram" src={insta} className="social-icon"/></a>    
            <a href="test"><img alt="twiter" src={twiter} className="social-icon"/></a>      
            <a href="test"><img alt="pinterest" src={pint} className="social-icon" /></a>   
        </article>
    );
}

export default Social;