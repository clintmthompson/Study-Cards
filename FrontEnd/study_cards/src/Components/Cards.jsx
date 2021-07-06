import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';



class Cards extends Component {
    constructor(props) {
      super();
        this.state = {
        isFlipped: false,
        cards: props.cards
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(event) {
      event.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      console.log(this.state)
    }
  
    render() {
      return (
        <div id='cards'>
        <div className="card text-center">
        <div className="card-body text-dark">
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
            <div>
            {this.state.cards[0][0].word} <br />
            <button className='btn btn-outline-primary' onClick={this.handleClick}>See Definition</button>
            </div>

            <div>
            {this.state.cards[0][0].definition} <br />
            <button className='btn btn-outline-primary' onClick={this.handleClick}>See word</button>
            </div>
        
        </ReactCardFlip>
        </div>
        </div>
        </div>
      )
    }
  }
 
export default Cards;