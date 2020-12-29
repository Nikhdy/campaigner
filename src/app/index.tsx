import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';
import { Provider } from "react-redux";
import store from './stores';
import { App } from './containers/app';

require('./styles/index.scss');

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} >
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);