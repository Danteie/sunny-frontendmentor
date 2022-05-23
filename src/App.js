import './App.css';
import React ,{Component} from 'react'
import Logo from './Commponent/Logo/Logo'
import Menu from './Commponent/Menu/Menu'
import Title from './Commponent/Title/Title'
import Grid from './Commponent/Grid/Grid'
import Clients from './Commponent/Clients/Clients'
import Images from './Commponent/Images/Images'
import Footer from './Commponent/Footer/Footer'
import Social from './Commponent/Social/Social'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      logo: 'sunnyside'
    };
  }



  render() {
    return(
      <div>
        <div className='top-bg'>
          <div className='top-menu'>
            <Logo logo={this.state.logo}/>
            <Menu/>
          </div>
          <Title/>
        </div>
        <div>
          <Grid/>
          <Clients />
        </div>
        <Images />
        <div className='footer-conntent'>
          <Footer/>
          <Social/>
        </div>
      </div>
    );
  }
}


export default App;
