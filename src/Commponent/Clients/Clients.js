import React ,{ Component } from "react";
import './Clients.css'
import ClientsList from '../ClientList/ClientList'
import clientList from '../Assets/clientsList'


class Clients extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            clients: clientList
        };
      }
    
    
    render(){
        return(  
            <div className="client">
               <h1 className="clinets-title">CLIENT TESTIMONIALS</h1>
               <div className="clients">
                   <ClientsList clients={this.state.clients}/>
               </div>
            </div> 
        );
    }      
}

export default Clients;