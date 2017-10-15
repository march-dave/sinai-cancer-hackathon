import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './App';
import Start from './Start';
import Smoking from './Smoking';
import NoMatch from './NoMatch';

import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render((
//   <Router history={browserHistory}>
//     <Route path="/" component={App}>
//       <IndexRoute component={Start} />
//       <Route path="smoking" component={Smoking}/>
//       {<Route path="*" component={NoMatch}/>}
//     </Route>
//   </Router>
// ), document.getElementById('root'))

ReactDOM.render(
    <Router>
        <div>
          <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/start" component={Start}/>
            <Route path="/smoking" component={Smoking}/>
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
