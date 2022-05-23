import React from "react";
import './Images.css'
import milk from './image-gallery-milkbottles.jpg'
import orange from './image-gallery-orange.jpg'
import cone from './image-gallery-cone.jpg'
import sugar from './image-gallery-sugarcubes.jpg'

function Images() {
    return (
        <div className="images-bottom">
            <div className="images-bottom1"><img src={milk} alt="milk" className="fit"/></div>
            <div className="images-bottom2"><img src={orange} alt="orange"  className="fit"/></div>
            <div className="images-bottom3"><img src={cone} alt="cone"  className="fit"/></div>
            <div className="images-bottom4"><img src={sugar} alt="sugar"  className="fit"/></div>
        </div>
    );
}

export default Images;