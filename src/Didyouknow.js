import React, { Component } from 'react';
import { Button, FormControl, ControlLabel, FormGroup, HelpBlock, Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import ReactPlayer from 'react-player'

class Didyouknow extends Component {

    ClickSubmit() {
        window.location = '/Enterheight';
    }

    render() {
        return (

            <div>
            <p className="App-intro">
            <div style={{margin: 80, padding: 90}}>
            
                <h2 style={{display: 'flex', justifyContent: 'center'}}> Did you know?</h2>
                <Jumbotron>
                <div style={{border: '0px solid black'}}> 
                  <br />
                   <div style={{marginLeft: 20 }}> Being overweight or obese increases risks for many cancers</div>

                    <li style={{marginLeft: 20 }}>Breast Cancer</li>
                    <li style={{marginLeft: 20 }}>Colon Cancer</li>
                    <li style={{marginLeft: 20 }}>Endometrium</li>
                    <li style={{marginLeft: 20 }}>Esophagus</li>
                    <li style={{marginLeft: 20 }}>Kidney</li>
                    <li style={{marginLeft: 20 }}>Pancreas</li>

                  <br />
                  
                
                </div>
                </Jumbotron>

                {/* <ReactPlayer url='https://www.youtube.com/watch?v=VC3hkufv8rU' playing /> */}

                <br />

                <div style={{float: 'left', width: '50%'}}><Button bsStyle="success" onClick={this.ClickSubmit.bind(this)}>Check your weight</Button>
                </div>
              
            </div>


            </p>
            </div>
        );
    }
}

export default Didyouknow;