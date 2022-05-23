import React from "react";
import './ClientCard.css'

function ClientCard(props) {
    return(
        <div className="client-card">
            <img alt="smor" src={props.image} className='profile-image'></img>
            <p className="comment-text">{props.comment}</p>
            <h2 className="client-card-name">{props.name}</h2>
            <p>{props.job}</p>
        </div>
    );
}

export default ClientCard;