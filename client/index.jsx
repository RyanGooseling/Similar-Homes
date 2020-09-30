import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

var homes = JSON.parse(document.getElementById('homes').innerHTML);

ReactDOM.render(<App homes={homes}/>, document.getElementById('app'));