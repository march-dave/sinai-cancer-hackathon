import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Button, FormControl, ControlLabel, FormGroup, HelpBlock, Jumbotron } from 'react-bootstrap';

class App extends Component {

  render() {
    return (
      <div className="App">

        <p className="App-intro">

          <video
            src="https://youtu.be/5drfFGxZSro"
            type="video/mp4" autoPlay="autoplay" loop
            key='b'>
          </video>

          <div style={{ margin: 80, padding: 80 }}>

            <Jumbotron>
              <div style={{ border: '0px solid black' }}>
                <br />
                <h2>Your First 3 Steps</h2>
                <br />
                <Link to="/Disclaimer">Disclaimer</Link>

              </div>
            </Jumbotron>

          </div>

        </p>

      </div>
    );
  }
}

export default App;
