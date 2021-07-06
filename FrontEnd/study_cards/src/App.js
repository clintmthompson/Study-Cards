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
          },
          {
              "id": 2,
              "name": "..."
          },
          {
              "id": 3,
              "name": "..."
          },
          {
            "id": 4,
            "name": "..."
         }
      ]
      ],
      cards: [[
        {
            "id": 1,
            "deck": 1,
            "word": "Cards From Your Selected Collection Will Appear Here",
            "definition": "something you eat"
        },
        
    ]]
     }
  }

  getCollection = async () => {
    let response =await axios.get(`http://127.0.0.1:8000/deck/`);
    console.log(response.data)
    this.setState({
        collection: [response.data]
    });
    console.log('test', this.state.collection[0][0].name)
}

componentDidMount(){
  this.getCollection();
  console.log(this.state.collection[0])
}

  render() { 
    return ( 
      <div className="App">
      <Header />
        <Collection collection={this.state.collection}/>
        <Cards cards={this.state.cards}/>
    </div>
     );
  }
}
 
export default App;