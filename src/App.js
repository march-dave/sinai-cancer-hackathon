import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class App extends Component {

  ClickYes() {
    // console.log('Yes');
    alert('Yes');    
    // window.location = '/search/'+this.state.query+'/some-action';
    window.location = '/smoking';
    
  }

  ClickNo(e) {
    console.log('No', e);

    alert('No');
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        */}

        <p className="App-intro">
          
          <div style={{border: '0px solid black'}}> 
            <div style={{ margin: 80, padding: 80, border: '1px solid black' }}>
              {/* <div style={{float: 'left', width: '50%'}}>Cell 1</div> */}
              <div>Do you Smoke?</div>
            </div>
            <div style={{ margin: 80, padding: 80, border: '0px solid black' }}>
              <div style={{float: 'left', width: '50%'}}><Button bsStyle="danger" onClick={this.ClickYes.bind(this)}>Yes</Button></div>
              <div style={{float: 'left', width: '50%'}}><Button bsStyle="success" onClick={this.ClickNo.bind(this)}>No</Button></div>

              {/* {<Link to="/smoking">Smoking</Link>} */}


            </div>
          </div>

        </p> 

      </div>
    );
  }
}

export default App;
