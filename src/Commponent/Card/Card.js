import React from "react";
import './Card.css';

function Card({cardTitle,cardText,background}) {
    return (
        <article className={`cardText ${background}`}>
           <h1 className='card-title'>{cardTitle}</h1>
           <p className="card-text">{cardText}</p>
        </article>
    );
}

export default Card;