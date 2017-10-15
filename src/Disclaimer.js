import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, FormControl, ControlLabel, FormGroup, HelpBlock, Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';

class Disclaimer extends Component {

    ClickSubmit() {
        window.location = '/Didyouknow';
    }


    render() {
        return (
            <div style={{margin: 80, padding: 80}}>

                <Jumbotron>
                    <p style={{margin: 20, padding: 5}} >
                        Disclaimer: This i san educational tool and does not constitute medical advice.
                    </p>
                    <Image src="./thumbnail.png" rounded />
                </Jumbotron>
                <br />
                <div style={{float: 'left', width: '50%'}}><Button bsStyle="success" onClick={this.ClickSubmit.bind(this)}>Did you know?</Button>
                </div>

            </div>
        );
    }
}

export default Disclaimer;