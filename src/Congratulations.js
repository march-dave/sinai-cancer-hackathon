import React, { Component } from 'react';
import { Button, FormControl, ControlLabel, FormGroup, HelpBlock, Jumbotron, Checkbox } from 'react-bootstrap';

class Congratulations extends Component {
    render() {
        return (
            <div style={{margin: 80, padding: 80}}>
                <Jumbotron style={{margin: 80, padding: 80}}>
                   
                    You took your first 3 steps to better health. <br />
                    
                    Please contiune to take stpes for health & longevity!

                </Jumbotron>
            </div>
        );
    }
}

export default Congratulations;