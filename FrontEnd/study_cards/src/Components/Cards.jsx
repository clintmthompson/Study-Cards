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
    }

    displayCollection(){
        console.log(this.state.cards)
        let results = (
          this.state.cards[0].map((item, index) => (
            <div>
                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                        
                        <div className="card text-center">
                            <div className="card-body text-dark">
                                <h3>{item.word}</h3> 
                                <button className='btn btn-outline-primary' onClick={this.handleClick}>View definitions</button> <br /><br />
                                <p>Card Number {index+1} / {this.state.cards[0].length}</p>
                            </div>
                        </div>

                        <div className="card text-center">
                            <div className="card-body text-dark">
                                <h3>{item.definition}</h3> 
                                <button className='btn btn-outline-primary' onClick={this.handleClick}>Hide definitions</button> <br /><br />
                                <p>Card Number {index+1} / {this.state.cards[0].length}</p>
                            </div>
                        </div>
                    </ReactCardFlip>
                    </div>
          ))
          )
          return results
    }
  
    render() {
      return (
        <div id='cards' className='overflow-auto'>
            <h1>Flash Cards</h1>
            {this.displayCollection()}
        </div>
      )
    }
  }
 
export default Cards;