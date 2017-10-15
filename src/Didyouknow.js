import React, { Component } from 'react';
import { Button, FormControl, ControlLabel, FormGroup, HelpBlock, Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';


class Didyouknow extends Component {

    ClickSubmit() {
        window.location = '/Enterheight';
    }

    render() {
        return (
            <div style={{margin: 80, padding: 80}}>
            
                <h2 style={{display: 'flex', justifyContent: 'center'}}> Did you know?</h2>
                <Jumbotron>
                <div style={{border: '0px solid black'}}> 
                  <br />
                  Being overweight or obese increases risks for many cancers

                    <li>
                        Breast Cancer</li>
                    <li>
                        Colon Cancer
                        </li>
                    <li>
                        Endometrium
                        </li>
                    <li>
                        Esophagus
                        </li>
                    <li>
                        Kidney
                        </li>
                    <li>
                        Pancreas
                        </li>

                  <br />
                  
                
                </div>
                </Jumbotron>


                <div style={{float: 'left', width: '50%'}}><Button bsStyle="success" onClick={this.ClickSubmit.bind(this)}>Check your weight</Button>
                </div>
              
            </div>
        );
    }
}

export default Didyouknow;