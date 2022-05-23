import React, { Component } from "react";
import './Grid.css';
import egg from './image-transform.jpg';
import glass from './image-stand-out.jpg';
import Text from '../Text/Text';
import Card from '../Card/Card';

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          title1: 'Transform your brand',
          text1: 'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.',
          title2: ' Stand out to the right audience',
          text2: 'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.',
          color1: 'yellow',
          color2: 'red',
          cardTitle1: 'Graphic Design',
          cardTitle2: 'Photography',
          cardText1:'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.',
          cardText2:'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
        };
      }
    
    
    render(){
        return(  
            <div class="parent">
                <div class="div1"><Text title={this.state.title1} text={this.state.text1} color={this.state.color1}/></div>
                <div class="div2"><img src={egg} alt="egg" className="img-box"/></div>
                <div class="div3"><img src={glass} alt="glass" className="img-box"/></div>
                <div class="div4"><Text title={this.state.title2} text={this.state.text2} color={this.state.color2}/></div>
                <div class="div5"><Card cardTitle={this.state.cardTitle1} cardText={this.state.cardText1} background={'background1'}/></div>
                <div class="div6"><Card cardTitle={this.state.cardTitle2} cardText={this.state.cardText2} background={'background2'}/></div>
            </div> 
        );
    }      
}

export default Grid;