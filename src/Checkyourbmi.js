import React, { Component } from 'react';
import { Button, FormControl, ControlLabel, FormGroup, HelpBlock, Jumbotron, Checkbox } from 'react-bootstrap';
import './App.css';
import ReactPlayer from 'react-player'

class Checkyourbmi extends Component {

    ClickSubmit() {
        window.location = '/Congratulations';
    }

    render() {

        return (
            <div style={{margin: 80, padding: 80}}>
            
                <Jumbotron>
                    {/* <h2>Underweight BMI less than 18.5</h2> */}
                    <h3>Your BMI is unhealthy</h3>

                    <div style={{margin: 5, padding: 5, backgroundColor: '#ffef96'}}>
                        <h3>
                        You can reduce cancer risk by losing weight
                        <br />Here are some suggestions
                        
                        </h3></div>

                </Jumbotron>

            <ReactPlayer url='https://www.youtube.com/watch?v=2dU-t0BwpI4' playing />

            <Checkbox checked readOnly>
            Text me
            </Checkbox>

            <Checkbox checked readOnly>
            Email me
            </Checkbox>
              
            <div style={{float: 'left', width: '50%'}}><Button bsStyle="success" onClick={this.ClickSubmit.bind(this)}>Congratulations</Button>
                </div>

            </div>
        );
    }
}

export default Checkyourbmi;