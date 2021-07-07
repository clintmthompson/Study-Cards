import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';



class Cards extends Component {
    constructor(props) {
      super();
        this.state = {
        isFlipped: false,
      };
      this.handleClick = this.handleClick.bind(this);
      this.displayCollection = this.displayCollection.bind(this);
    }
  
    handleClick(event) {
      event.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    displayCollection(){
        
        let results = (
          this.props.cards[0].map((item, index) => (
            <div key={item+index}>
                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                        
                        <div className="card text-center">
                            <div className="card-body text-dark">
                                <h3>{item.word}</h3> 
                                <button className='btn btn-outline-primary' onClick={this.handleClick}>View definitions</button> <br /><br />
                                <p>Card Number {index+1} / {this.props.cards[0].length}</p>
                            </div>
                        </div>

                        <div className="card text-center">
                            <div className="card-body text-dark">
                                <h3>{item.definition}</h3> 
                                <button className='btn btn-outline-primary' onClick={this.handleClick}>Hide definitions</button> <br /><br />
                                <p>Card Number {index+1} / {this.props.cards[0].length}</p>
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
        <div id='cards' className='overflow-auto' >
            {this.displayCollection()}
        </div>
      )
    }
  }
 
export default Cards;