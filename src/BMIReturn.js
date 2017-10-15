import React, { Component } from 'react';
import { Button, FormControl, ControlLabel, FormGroup, HelpBlock, Jumbotron } from 'react-bootstrap';
import './App.css';

class BMIReturn extends Component {

    ClickSubmit() {
        window.location = '/Checkyourbmi';
    }

    render() {
        return (
            <div style={{margin: 80, padding: 80}}>
            
                <Jumbotron>
                    {/* <h2>Underweight BMI less than 18.5</h2> */}
                    <h2>Your BMI is 28.3</h2>

                    <div style={{backgroundColor: 'green'}}><h2>healthy 18.5 - 24.9</h2></div>
                    <div style={{backgroundColor: 'yellow'}}><h2>overweight > 25</h2></div>
                    <div style={{backgroundColor: 'red'}}><h2>overweight BMI > 30</h2></div>

                </Jumbotron>

                <div style={{float: 'left', width: '50%'}}><Button bsStyle="success" onClick={this.ClickSubmit.bind(this)}>Check your BMI</Button>
                </div>
               
            </div>
        );
    }
}

export default BMIReturn;