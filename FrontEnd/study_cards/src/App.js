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
            "word": "Pizza",
            "definition": "something you eat"
        },
        {
            "id": 4,
            "deck": 1,
            "word": "big burger",
            "definition": "big sandwich"
        },
        {
            "id": 5,
            "deck": 2,
            "word": "Variable",
            "definition": "Holds Data"
        }
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
      <div className='float-container'>
        <Collection collection={this.state.collection}/>
        <Cards cards={this.state.cards}/>
      </div>
    </div>
     );
  }
}
 
export default App;