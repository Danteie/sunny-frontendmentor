import React from "react";
import './Text.css';

function Text({title,text,color}) {
    return (
        <article className="article-text ">
           <h1 className="article-title">{title}</h1> 
           <p className="article-p">{text}</p>
            <a href="test" className={`article-learn ${color}`}>LEARN MORE</a>
        </article>
    );
}

export default Text;