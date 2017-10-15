import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Disclaimer extends Component {
    render() {
        return (
            <div className="App">
                Disclaimer: This i san educational tool and does not constitute medical advice.

                <br />
                <Link to="/Costofcancer">Cost of cancer</Link>
                
            </div>
        );
    }
}

export default Disclaimer;