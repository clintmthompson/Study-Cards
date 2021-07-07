import './App.css';
import Header from './Components/Header';
import Collection from './Components/Collection';
import React, { Component } from 'react';
import axios from 'axios'
import Cards from './Components/Cards';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      collection: [
        [
          {
              "id": 1,
              "name": "..."
          }
      ]
      ],
      cards: [[
        {
            "id": 1,
            "deck": 1,
            "word": "Cards From Your Selected Collection Will Appear Here",
            "definition": "Definitions will be displayed here"
        },
        {
          "id": 2,
          "deck": 2,
          "word": "Example Word",
          "definition": "Example Definition"
      },
        
    ]]
     }
  }

  handleSubmit = async (event, id) => {
    event.preventDefault()
    let response = await axios.get(`http://127.0.0.1:8000/card/`);


    let result =(
    response.data.filter(function (item) {
      if(item.deck === id){
          return true;
      }
      return false;
  }))

  this.setState({
    cards: [result]
});

console.log("Current State:")
console.log(this.state.cards)
}

  getCollection = async () => {
    let response =await axios.get(`http://127.0.0.1:8000/deck/`);
    this.setState({
        collection: [response.data]
    });
}

componentDidMount(){
  this.getCollection();
  console.log("Current State:")
  console.log(this.state.cards)
}

  render() { 
    return ( 
      <div className="App">
      <Header />
        <Collection collection={this.state.collection} handleSubmit={this.handleSubmit}/>
        <Cards cards={this.state.cards}/>
    </div>
     );
  }
}
 
export default App;