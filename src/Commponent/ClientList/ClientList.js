import React from "react";
import './CardList.css'
import ClientCard from '../ClientCard/ClientCard'

const ClientList= (props) => {
  const clientsList = props.clients.map((user,i) => {
      console.log(props.clients);
      return <ClientCard 
        key={i} name={props.clients[i].name} 
        job={props.clients[i].job} 
        comment={props.clients[i].comment}
        image={props.clients[i].image}/>
  })

    return (
        <div className="clients">
            {clientsList}
        </div>

    )
}

export default ClientList