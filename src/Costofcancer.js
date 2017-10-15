import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, FormControl, ControlLabel, FormGroup, HelpBlock, Jumbotron } from 'react-bootstrap';

class Costofcancer extends Component {
    render() {
        return (
        
            <div style={{margin: 80, padding: 80}}>

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
                  <Link to="/Enterheight">Enterheight</Link>
                
                </div>
                </Jumbotron> */}

            
                {/* <h2 style={{display: 'flex', justifyContent: 'center'}}> Did you know?</h2>
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
                  <Link to="/Enterheight">Enterheight</Link>
                
                </div>
                </Jumbotron> */}

              
            </div>

        );
    }
}

export default Costofcancer;