import React from "react";
import './Title.css'
import arrow from './icon-arrow-down.svg'


function Title(props) {
    return(
        <div className="title">
            <h1 className="title-text">WE ARE CREATIVES</h1>
            <img src={arrow} alt="arrow"/>
        </div>
    );
}

export default Title;