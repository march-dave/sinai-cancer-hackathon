import React, { Component } from 'react';
import { Button, FormControl, ControlLabel, FormGroup, HelpBlock, Jumbotron, Checkbox } from 'react-bootstrap';
import ReactPlayer from 'react-player'

class Congratulations extends Component {
    render() {
        return (
            <div style={{margin: 80, padding: 80}}>
                <Jumbotron>
                   
                    <h4 style={{padding: 10}}>You took your first 3 steps to better health.</h4> <br />
                    
                    <h4 style={{padding: 10}}>Please contiune to take stpes for health & longevity!</h4>

                </Jumbotron>

                <ReactPlayer url='https://www.youtube.com/watch?v=5drfFGxZSro' playing />

            </div>
        );
    }
}

export default Congratulations;