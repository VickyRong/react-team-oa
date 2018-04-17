import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home/home.jsx';
import routes from './router'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Home />,
    // routes,
    document.getElementById('root')
);
registerServiceWorker();
