import React, { Component } from 'react';
import { Button, FormControl, ControlLabel, FormGroup, HelpBlock } from 'react-bootstrap';
import './App.css';

class Enterheight extends Component {

    ClickSubmit() {
        window.location = '/BMIReturn';
    }

    render() {
        return (
            
            <div style={{ margin: 80, padding: 80, border: '1px solid black' }}>

                <form> 
                    <FormGroup
                    controlId="formBasicText"
                    >
                    <ControlLabel>Please enter Height?  inch/cm:</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Enter text"
                        value="5' 6''"
                    />

                    <ControlLabel>Weight:lbs/kg</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Enter text"
                        value="175 lb"
                    />

                    <ControlLabel>BMI</ControlLabel>
                    <FormControl
                        type="text"
                        placeholder="Enter text"
                        value="28.3"
                    />                    
                  
                    </FormGroup>
                </form>

                <div style={{float: 'left', width: '50%'}}><Button bsStyle="success" onClick={this.ClickSubmit.bind(this)}>Submit</Button></div>

            </div>
        );
    }
}

export default Enterheight;