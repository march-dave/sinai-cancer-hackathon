import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
      

        <p className="App-intro">
          
          <div style={{border: '0px solid black'}}> 
            <br />
            Your First 3 Steps
            <br />
            <Link to="/Disclaimer">Disclaimer</Link>
          
          </div>

        </p> 

      </div>
    );
  }
}

export default App;
