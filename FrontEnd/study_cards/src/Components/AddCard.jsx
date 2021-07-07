import React, { Component } from 'react';
import axios from 'axios';

class AddCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            deck: this.props.cards[0][0].deck
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const newCard = {
            deck: this.props.cards[0][0].deck,
            definition: this.state.definition,
            word: this.state.word    
        }
        this.setState (newCard)
        axios.post('http://127.0.0.1:8000/card/', newCard)       
}


    render() { 
        return ( 
        <div style={{color: 'white', textAlign: 'right', paddingRight: '200px'}}>
            <h1>Add Card to Current Collection</h1>
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label htmlFor="word">New word: </label>
                    <input type="text" name="word"  onChange={this.handleChange} value={this.state.word}/><br />
                <label htmlFor="definition">Definition: </label>
                    <input type="text" name="definition" onChange={this.handleChange} value={this.state.definition}/><br />
                <button className='btn btn-primary' type='submit'>Add to Collection</button>
            </form>
               
        </div>
         );
    }
}
 
export default AddCard;
