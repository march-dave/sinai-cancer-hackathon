import React, { Component } from 'react';
import { Button, FormControl, ControlLabel, FormGroup, HelpBlock, Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import './App.css';

class BMIReturn extends Component {

    ClickSubmit() {
        window.location = '/Checkyourbmi';
    }

    render() {
        return (
            <div style={{ margin: 80, padding: 80 }}>

                <Jumbotron>
                    <h2 style={{ textAlign: 'center' }}>Your BMI is 28.3</h2>
                </Jumbotron>

                <div style={{ margin: 1, padding: 1, backgroundColor: '#40ff00' }}><h2>healthy 18.5 - 24.9</h2></div>
                <div style={{ margin: 1, padding: 1, backgroundColor: '#ffff00' }}><h2>overweight > 25</h2></div>
                <div style={{ margin: 1, padding: 1, backgroundColor: '#ff0000' }}><h2>overweight BMI > 30</h2></div>

                <br />

                <div style={{ float: 'left', width: '50%' }}>
                    <Button bsStyle="success" onClick={this.ClickSubmit.bind(this)}>Check your BMI</Button>
                </div>

            </div>
        );
    }
}

export default BMIReturn;