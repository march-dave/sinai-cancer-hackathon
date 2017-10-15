import React, { Component } from 'react';
import { Button, FormControl, ControlLabel, FormGroup, HelpBlock, Jumbotron } from 'react-bootstrap';
import './App.css';

class BMIReturn extends Component {
    render() {
        return (
            <div style={{margin: 80, padding: 80}}>
            
                <Jumbotron>
                    {/* <h2>Underweight BMI less than 18.5</h2> */}
                    <h2>Your Underweight BMI is 28.3</h2>

                    <div style={{backgroundColor: 'green'}}><h2>healthy 18.5 - 24.9</h2></div>
                    <div style={{backgroundColor: 'yellow'}}><h2>overweight > 25</h2></div>
                    <div style={{backgroundColor: 'red'}}><h2>overweight BMI > 30</h2></div>

                </Jumbotron>

                <p>
                {/* under weight BMI < 18.5 */}
                { 
                /*health BMI 18.5 - 24.9
                overight BMI > 25
                obese BMI > 30 */}
                </p>

                {/* Your BMI is under weight healthy range or 
                
                unhealth range

                voice) You can reduce cancer risk by loosing wt */}
            </div>
        );
    }
}

export default BMIReturn;