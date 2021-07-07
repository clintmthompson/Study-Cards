import React, { Component } from 'react';

class AddCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div style={{color: 'white', textAlign: 'right', paddingRight: '200px'}}>
            <h1>Add Card to Collection</h1>
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
