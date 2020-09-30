import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

var id = document.getElementById('id').innerHTML;

ReactDOM.render(<App id={id}/>, document.getElementById('app'));