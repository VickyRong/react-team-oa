import React from 'react';
import ReactDOM from 'react-dom';
// import Home from './pages/home/home.jsx';
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router'
import routes from './router'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('root')
);
registerServiceWorker();
