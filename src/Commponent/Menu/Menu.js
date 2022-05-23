import React from "react";
import './Menu.css';

function Menu(props) {
    return (
        <nav>
            <a href="test">About</a>
            <a href="test">Services</a>
            <a href="test">Projects</a>
            <a href="test" className="contact">Contact</a>
        </nav>
    );
}

export default Menu;