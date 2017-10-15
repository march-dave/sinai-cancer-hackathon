import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './App';
import Start from './Start';
import Smoking from './Smoking';
import NoMatch from './NoMatch';
import Disclaimer from './Disclaimer';
import Costofcancer from './Costofcancer';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
          <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/start" component={Start}/>
            <Route path="/smoking" component={Smoking}/>
            <Route path="/disclaimer" component={Disclaimer}/>
            <Route path="/costofcancer" component={Costofcancer}/>
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
