import './App.css';
import Header from './Components/Header';
import Collection from './Components/Collection';
import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      collection: [
        [
          {
              "id": 1,
              "name": "Foods"
          },
          {
              "id": 2,
              "name": "Javascript"
          }
      ]
      ]
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
    </div>
     );
  }
}
 
export default App;